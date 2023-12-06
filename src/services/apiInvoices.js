import supabase from "./supabase.js";

export async function getInvoices() {
  const { data, error } = await supabase.from("invoice").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createInvoice(newInvoice) {
  const query = supabase.from("invoice").insert([{ ...newInvoice }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Invoice could not be created");
  }

  return data;
}

export async function editInvoice(newInvoice, id) {
  const query = supabase
    .from("invoice")
    .update({ ...newInvoice })
    .eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Invoice could not be created");
  }

  return data;
}

export async function deleteInvoice(id) {
  const { data, error } = await supabase.from("invoice").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Invoice could not be deleted");
  }

  return data;
}
