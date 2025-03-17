<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TailorDesignUploads extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "design_name",
        "design_image",
        "category",
        "description",
        "price_range",
        "status",
    ];
}
