<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Product')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('General')
                            ->schema([
                                Forms\Components\Group::make()
                                    ->schema([
                                        Forms\Components\Section::make('Basic Information')
                                            ->schema([
                                                Forms\Components\TextInput::make('name')
                                                    ->required()
                                                    ->live(onBlur: true)
                                                    ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null)
                                                    ->maxLength(255),

                                                Forms\Components\TextInput::make('slug')
                                                    ->required()
                                                    ->unique(Product::class, 'slug', ignoreRecord: true)
                                                    ->maxLength(255),

                                                Forms\Components\TextInput::make('sku')
                                                    ->label('SKU')
                                                    ->required()
                                                    ->unique(Product::class, 'sku', ignoreRecord: true)
                                                    ->maxLength(100),

                                                Forms\Components\Select::make('category_id')
                                                    ->relationship('category', 'name')
                                                    ->searchable()
                                                    ->preload()
                                                    ->required(),

                                                Forms\Components\TextInput::make('brand')
                                                    ->maxLength(100),

                                                Forms\Components\TextInput::make('model')
                                                    ->maxLength(100),
                                            ])->columns(2),
                                    ])->columnSpan(['lg' => 2]),

                                Forms\Components\Group::make()
                                    ->schema([
                                        Forms\Components\Section::make('Pricing & Status')
                                            ->schema([
                                                Forms\Components\TextInput::make('price')
                                                    ->numeric()
                                                    ->prefix('$'),

                                                Forms\Components\Toggle::make('show_price')
                                                    ->label('Show Price publicly')
                                                    ->default(false),

                                                Forms\Components\Select::make('status')
                                                    ->options([
                                                        'new' => 'New',
                                                        'used' => 'Used',
                                                        'refurbished' => 'Refurbished',
                                                    ])
                                                    ->default('new')
                                                    ->required(),

                                                Forms\Components\Toggle::make('is_active')
                                                    ->default(true),

                                                Forms\Components\Toggle::make('is_featured')
                                                    ->default(false),
                                            ]),
                                    ])->columnSpan(['lg' => 1]),
                            ])->columns(3),

                        Forms\Components\Tabs\Tab::make('Details')
                            ->schema([
                                Forms\Components\Textarea::make('short_description')
                                    ->rows(3)
                                    ->columnSpanFull(),

                                Forms\Components\RichEditor::make('description')
                                    ->columnSpanFull(),

                                Forms\Components\TextInput::make('video_url')
                                    ->url()
                                    ->maxLength(500)
                                    ->columnSpanFull(),
                            ]),

                        Forms\Components\Tabs\Tab::make('Images')
                            ->schema([
                                Forms\Components\Repeater::make('images')
                                    ->relationship()
                                    ->schema([
                                        Forms\Components\FileUpload::make('path')
                                            ->label('Image')
                                            ->image()
                                            ->directory('products')
                                            ->required(),

                                        Forms\Components\TextInput::make('alt_text')
                                            ->maxLength(255),

                                        Forms\Components\Toggle::make('is_primary')
                                            ->default(false),

                                        Forms\Components\TextInput::make('sort_order')
                                            ->numeric()
                                            ->default(0),
                                    ])
                                    ->columns(2)
                                    ->defaultItems(0)
                                    ->reorderableWithButtons(),
                            ]),

                        Forms\Components\Tabs\Tab::make('Specifications')
                            ->schema([
                                Forms\Components\Repeater::make('specs')
                                    ->relationship()
                                    ->schema([
                                        Forms\Components\TextInput::make('spec_key')
                                            ->label('Name')
                                            ->required()
                                            ->maxLength(100),

                                        Forms\Components\TextInput::make('spec_value')
                                            ->label('Value')
                                            ->required(),

                                        Forms\Components\TextInput::make('spec_group')
                                            ->label('Group')
                                            ->placeholder('e.g. Dimensions')
                                            ->maxLength(50),

                                        Forms\Components\TextInput::make('sort_order')
                                            ->numeric()
                                            ->default(0),
                                    ])
                                    ->columns(2)
                                    ->defaultItems(0)
                                    ->reorderableWithButtons(),
                            ]),

                        Forms\Components\Tabs\Tab::make('Documents')
                            ->schema([
                                Forms\Components\Repeater::make('documents')
                                    ->relationship()
                                    ->schema([
                                        Forms\Components\TextInput::make('name')
                                            ->required()
                                            ->maxLength(255),

                                        Forms\Components\FileUpload::make('file_path')
                                            ->label('File')
                                            ->directory('product-documents')
                                            ->required(),

                                        Forms\Components\TextInput::make('sort_order')
                                            ->numeric()
                                            ->default(0),
                                    ])
                                    ->columns(2)
                                    ->defaultItems(0)
                                    ->reorderableWithButtons(),
                            ]),

                        Forms\Components\Tabs\Tab::make('SEO')
                            ->schema([
                                Forms\Components\TextInput::make('meta_title')
                                    ->maxLength(255),

                                Forms\Components\Textarea::make('meta_description')
                                    ->rows(3),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordUrl(
                fn (Product $record): string => Pages\EditProduct::getUrl([$record->id]),
            )
            ->columns([
                Tables\Columns\ImageColumn::make('primaryImage.path')
                    ->label('Image')
                    ->square(),

                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->limit(50),

                Tables\Columns\TextColumn::make('sku')
                    ->label('SKU')
                    ->searchable(),

                Tables\Columns\TextColumn::make('category.name')
                    ->sortable(),

                Tables\Columns\TextColumn::make('price')
                    ->money('USD')
                    ->sortable(),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->colors([
                        'success' => 'new',
                        'warning' => 'used',
                        'gray' => 'refurbished',
                    ]),

                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('category', 'name'),

                Tables\Filters\TernaryFilter::make('is_active'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
