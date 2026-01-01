<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class PageController extends Controller
{
    public function home()
    {
        // Fetch featured products for the home page
        $featuredProducts = Product::with(['category', 'images'])
            ->where('is_featured', true)
            ->where('is_active', true)
            ->take(4)
            ->get()
            ->map(function ($product) {
                return [
                    'id' => (string) $product->id,
                    'name' => $product->name,
                    'category' => $product->category->name ?? 'Uncategorized',
                    'image' => $product->images->where('is_primary', true)->first()->path ?? $product->images->first()->path ?? '',
                    'description' => $product->short_description ?? $product->description,
                ];
            });

        return Inertia::render('Home', [
            'featuredProducts' => $featuredProducts
        ]);
    }

    public function solutions()
    {
        return Inertia::render('Solutions/Index');
    }
}
