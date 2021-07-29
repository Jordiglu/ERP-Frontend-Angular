export interface RespClients {
  success: string;
  client:  Client;
  message: string;
}

interface Client {
  id:               string;
  dni:              string;
  image:            string;
  name_and_surname: string;
  address:          Address;
  shipping_address: Address;
  user:             User;
}

interface Address {
  id:      string;
  street:  string;
  number:  string;
  city:    string;
  country: string;
  zipcode: string;
}

interface User {
  id:          number;
  username:    string;
  password:    string;
  lastSession: null;
  active:      boolean;
  user_type:   string;
}
