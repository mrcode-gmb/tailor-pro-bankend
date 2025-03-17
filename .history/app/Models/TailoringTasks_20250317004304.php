<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TailoringTasks extends Model
{
    use HasFactory;

    protected $fillable = [
        customer_id
measurement_id
task_number
garment_type
fabric_type
fabric_source
design_reference
style_description
task_status
price
payment_status
delivery_date
special_notes
    ]
}
