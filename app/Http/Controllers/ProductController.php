<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['category', 'images'])
            ->where('is_active', true);

        if ($request->has('category') && $request->category !== 'All') {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('name', $request->category);
            });
        }

        $products = $query->paginate(12)->through(function ($product) {
            return [
                'id' => (string) $product->id,
                'name' => $product->name,
                'category' => $product->category->name ?? 'Uncategorized',
                'image' => $product->images->where('is_primary', true)->first()->path ?? $product->images->first()->path ?? '',
                'description' => $product->short_description ?? $product->description,
            ];
        });

        $categories = ['All', ...Category::where('is_active', true)->pluck('name')->toArray()];

        return Inertia::render('Products/Index', [
            'products' => $products,
            'categories' => $categories,
            'filters' => $request->only(['category']),
        ]);
    }

    public function show($id)
    {
        $product = Product::with(['category', 'images', 'specs'])
            ->where('id', $id) // Ideally use slug, but maintaining ID for now as per previous frontend
            ->where('is_active', true)
            ->firstOrFail();

        $transformedProduct = [
            'id' => (string) $product->id,
            'name' => $product->name,
            'category' => $product->category->name ?? 'Uncategorized',
            'image' => $product->images->where('is_primary', true)->first()->path ?? $product->images->first()->path ?? '',
            'description' => $product->description,
            'features' => $product->specs->pluck('spec_value')->toArray(),
        ];

        return Inertia::render('Products/Show', [
            'product' => $transformedProduct
        ]);
    }
}
