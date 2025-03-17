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
        Schema::create('manual_measurements', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->comment("customer id for each customer")->constrained();
            $table->string()
            $table->text("special_notes")->comment("description about the measurement");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('manual_measurements');
    }
};
