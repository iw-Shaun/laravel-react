<?php

use Illuminate\Database\Seeder;
use App\Contact;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 讓`seeder`知道我們要用\Faker\Factory::create()的function
        Contact::truncate();

        $faker = \Faker\Factory::create();

        // 開始建立欄位所需要的假資料參數到資料庫裡
        for ($i = 0; $i < 20; $i++) {
            Contact::create([
                'name' => $faker->name,
                'tel' => $faker->phoneNumber,
                'address' => $faker->country,
            ]);
        }
    }
}
