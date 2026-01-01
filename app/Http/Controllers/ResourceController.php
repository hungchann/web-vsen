<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResourceController extends Controller
{
    public function index()
    {
        // Mock data if table is empty or just fetch
        // For MVP phase, if resources table is empty, we can just return empty or seed.
        // Assuming we haven't seeded resources yet.
        
        $resources = Resource::where('is_public', true)
            ->paginate(9);

        return Inertia::render('Resources/Index', [
            'resources' => $resources
        ]);
    }
}
