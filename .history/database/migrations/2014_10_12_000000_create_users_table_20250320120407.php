<?php

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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('mobile_number')->unique()->nullable();
            $table->enum("gender", ['male', 'female', 'other'])->default("male")->nullable();
            $table->string("dob")->comment("date of birth")->nullable();
            $table->text("state")->comment("state for tailors and customers")->nullable();
            $table->text("address")->comment("address/location for tailors and customers")->nullable();
            $table->string("profile_photo")->comment("profile photo to customer and tailors to verify they both")->nullable();
            $table->enum('role', ['admin', 'tailor', 'customer'])->default('customer')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->enum('status', ['active', 'inactive', 'banned', ])->default('active');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
