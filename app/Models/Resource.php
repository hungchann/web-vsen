<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'description',
        'resource_type',
        'file_path',
        'file_url',
        'thumbnail',
        'specialty',
        'publish_year',
        'download_count',
        'is_public',
    ];

    protected $casts = [
        'is_public' => 'boolean',
        'publish_year' => 'integer',
        'download_count' => 'integer',
    ];
}
