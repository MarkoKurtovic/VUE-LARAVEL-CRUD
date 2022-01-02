<?php

namespace Database\Factories;
use App\Models\User;
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;



class UserFactory extends Factory
{


protected $model = \App\Models\Todo::class;


public function definition()
{
    return [
        'name' => $this->faker->name(),
        'detail' => $this->faker->text(),
    ];
}

}