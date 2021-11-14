import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class PersonsDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      persons: [
        {
          id: 1,
          first_name: 'Cristian',
          last_name: 'Escudero',
          middle_name: 'Cestero',
          personal_number: '123e4567-0000-0000-0000-426614174000',
          email: 'cristian.escudero@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 2,
          first_name: 'Eva',
          last_name: 'Panadero',
          middle_name: '',
          personal_number: '123e4567-1111-1111-1111-426614174000',
          email: 'eva.panadero@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 3,
          first_name: 'Hugo',
          last_name: 'Mendichua',
          middle_name: '',
          personal_number: '123e4567-2222-2222-2222-426614174000',
          email: 'hugo.mendichua@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 4,
          first_name: 'Pedro',
          last_name: 'Cuello',
          middle_name: '',
          personal_number: '123e4567-3333-3333-3333-426614174000',
          email: 'pedro.cuello@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 5,
          first_name: 'Raul',
          last_name: 'Ruiz',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'raul.ruiz@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 6,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 7,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 8,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 9,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 10,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 11,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 12,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 13,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 14,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 15,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 16,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 17,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 18,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 19,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 20,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 21,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 22,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 23,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 24,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 25,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 26,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 27,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 28,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 1,
          first_name: 'Cristian',
          last_name: 'Escudero',
          middle_name: 'Cestero',
          personal_number: '123e4567-0000-0000-0000-426614174000',
          email: 'cristian.escudero@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 2,
          first_name: 'Eva',
          last_name: 'Panadero',
          middle_name: '',
          personal_number: '123e4567-1111-1111-1111-426614174000',
          email: 'eva.panadero@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 3,
          first_name: 'Hugo',
          last_name: 'Mendichua',
          middle_name: '',
          personal_number: '123e4567-2222-2222-2222-426614174000',
          email: 'hugo.mendichua@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 4,
          first_name: 'Pedro',
          last_name: 'Cuello',
          middle_name: '',
          personal_number: '123e4567-3333-3333-3333-426614174000',
          email: 'pedro.cuello@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 5,
          first_name: 'Raul',
          last_name: 'Ruiz',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'raul.ruiz@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 6,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 7,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 8,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 9,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 10,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 11,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 12,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 13,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 14,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 15,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 16,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 17,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 18,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 19,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 20,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 21,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 22,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 23,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 24,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 25,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 26,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 27,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
        {
          id: 28,
          first_name: 'CEC',
          last_name: 'WF',
          middle_name: '',
          personal_number: '123e4567-4444-4444-4444-426614174000',
          email: 'cwf@primion-digitek.es',
          phone_number: '654221133',
          photo: '',
        },
      ],
    };
  }
}
