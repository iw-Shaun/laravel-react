<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    public function index(){
        $x = 123;
        $contacts = Contact::all();
        return response()->json([
            'contacts' => $contacts,
            'x' => $x
        ]);
    }

    public function create(Request $request){
        $contact = Contact::create([
            'name' =>$request->name,
            'tel' =>$request->tel,
            'address' =>$request->address,
        ]);
        return response()->json($contact);
    }

    public function edit($id){
        $contact = Contact::find($id);
        return response()->json($contact);
    }

    public function update(Request $request,$id){
        $contact = Contact::find($id)->update([
            'name' =>$request->name,
            'tel' =>$request->tel,
            'address' =>$request->address,
        ]);
        return response()->json($contact);
    }

    public function delete($id){
        $contact = Contact::find($id)->delete();
        $contacts = Contact::all();
        return response()->json($contacts);
    }
}
