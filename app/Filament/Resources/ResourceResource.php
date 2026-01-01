<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ResourceResource\Pages;
use App\Filament\Resources\ResourceResource\RelationManagers;
use App\Models\Resource as ResourceModel;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ResourceResource extends Resource
{
    protected static ?string $model = ResourceModel::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null)
                            ->maxLength(255),

                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->unique(ResourceModel::class, 'slug', ignoreRecord: true)
                            ->maxLength(255),

                        Forms\Components\Textarea::make('description')
                            ->rows(3)
                            ->columnSpanFull(),

                        Forms\Components\Select::make('resource_type')
                            ->options([
                                'brochure' => 'Brochure',
                                'manual' => 'Manual',
                                'driver' => 'Driver',
                                'software' => 'Software',
                                'video' => 'Video',
                            ])
                            ->required(),

                        Forms\Components\FileUpload::make('file_path')
                            ->label('File Upload')
                            ->directory('resources')
                            ->openable()
                            ->downloadable(),

                        Forms\Components\TextInput::make('file_url')
                            ->label('External URL')
                            ->url()
                            ->maxLength(500),

                        Forms\Components\FileUpload::make('thumbnail')
                            ->image()
                            ->directory('resource-thumbnails'),

                        Forms\Components\TextInput::make('specialty')
                            ->maxLength(100),

                        Forms\Components\TextInput::make('publish_year')
                            ->numeric()
                            ->minValue(1900)
                            ->maxValue(date('Y') + 1),

                        Forms\Components\Toggle::make('is_public')
                            ->default(true),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('thumbnail'),

                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(50),

                Tables\Columns\TextColumn::make('resource_type')
                    ->badge()
                    ->sortable(),

                Tables\Columns\TextColumn::make('specialty')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('publish_year')
                    ->sortable(),

                Tables\Columns\IconColumn::make('is_public')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('download_count')
                    ->numeric()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('resource_type')
                    ->options([
                        'brochure' => 'Brochure',
                        'manual' => 'Manual',
                        'driver' => 'Driver',
                        'software' => 'Software',
                        'video' => 'Video',
                    ]),
                Tables\Filters\TernaryFilter::make('is_public'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            'index' => Pages\ListResources::route('/'),
            'create' => Pages\CreateResource::route('/create'),
            'edit' => Pages\EditResource::route('/{record}/edit'),
        ];
    }
}
