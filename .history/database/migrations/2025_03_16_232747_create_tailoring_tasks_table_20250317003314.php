<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tailoring_tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->nullable()->comment("tailor id")->constrained();
            $table->string("customer_id")->nullable()->comment("customer id if the customer is registered customer on the platform");
            $table->string("measurement_id")->nullable()->comment("measurement id, if the customer is registered or not registered customer on the platform");
            $table->string("task_number")->unique()->comment("");
            $table->string("garment_type")->comment("")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tailoring_tasks');
    }
};
