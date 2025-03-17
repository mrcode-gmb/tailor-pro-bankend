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
            $table->enum("payment_status", ['pending', 'paid', 'failed', 'cancelled'])->default("pending")->nullable();
            $table->string("start_date")->comment("Subscription start date")->nullable();
            $table->string("end_date")->comment("Subscription end date")->nullable();
            $table->enum("status", ['active', 'expired', 'cancelled', 'paused'])->comment("Current subscription status")->nullable();
            $table->enum("renewal", [true, fal])->comment()->nullable();
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
