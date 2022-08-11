<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    public function index(){
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    public function create(Request $request){
        $contact = Contact::create([
            'name' =>$request->name,
            'tel' =>$request->tel,
        ]);
        return response()->jason($contact);
    }

    public function edit($id){
        $contact = Contact::find($id);
        return response()->jason($contact);
    }

    public function update(Request $request,$id){
        $contact = Contact::find($id)->update([
            'name' =>$request->name,
            'tel' =>$request->tel,
        ]);
        return response()->jason($contact);
    }

    public function delete($id){
        $contact = Contact::find($id)->delete();
        return response()->jason($contact);
    }
}
