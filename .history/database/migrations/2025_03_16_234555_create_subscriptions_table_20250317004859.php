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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained();
            $table->string("plan_name")->comment("Name of the subscription plan (e.g., Monthly Tailor Service, VIP Sewing)")->nullable();
            $table->enum("plan_type", ['monthly', 'quarterly', 'yearly', 'custom'])->default("custom")->comment("Type of subscription")->nullable();
            $table->string("price")->comment("Cost of the subscription")->nullable();
            $table->string("payment_status")->comment()->nullable();
            $table->string("")->comment()->nullable();
            $table->string("")->comment()->nullable();
            $table->string("")->comment()->nullable();
            $table->string("")->comment()->nullable();
            $table->string("")->comment()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
};
