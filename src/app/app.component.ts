import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Person } from './persons/persons.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'prime-test';

  selectedLanguage: Language = {
    name: 'English',
    code: 'en',
  };

  languages: Language[] = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
    { name: 'German', code: 'de' },
    { name: 'French', code: 'fr' },
    { name: 'Chinese', code: 'ch' },
  ];

  displayRightSideBar = false;

  itemsBreadcrumb: MenuItem[] = [
    { label: 'Persons', disabled: true },
    { label: 'All', disabled: true },
  ];

  home = { icon: 'pi pi-home', routerLink: '/' };

  person: Person = {
    id: -1,
    first_name: 'Eva',
    last_name: 'Panadero',
    middle_name: '',
    personal_number: '',
    email: '',
    phone_number: '',
    photo: '',
    title_type: 1,
    person_type: 1,
    in_service_date: new Date().toISOString(),
    out_service_date: new Date().toISOString(),
  };

  selectedPerson: Person = this.person;

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-pw pi-table',
      disabled: true,
    },
    {
      label: 'Identity Manager',
      icon: 'pi pi-fw pi-users',
      items: [
        {
          label: 'Persons',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'All',
            },
            {
              label: 'Active',
              disabled: true,
            },
            {
              label: 'New',
              disabled: true,
            },
          ],
        },
        {
          label: 'Accounts',
          icon: 'pi pi-fw pi-desktop',
          disabled: true,
          items: [
            {
              label: 'All',
            },
            {
              label: 'Active',
            },
            {
              label: 'New',
            },
          ],
        },
        {
          label: 'Roles',
          icon: 'pi pi-fw pi-wallet',
          disabled: true,
          items: [
            {
              label: 'All',
            },
            {
              label: 'Active',
            },
            {
              label: 'New',
            },
          ],
        },
      ],
    },
    {
      label: 'Request',
      icon: 'pi pi-fw pi-check-square',
      disabled: true,
      badge: '3',
      items: [
        {
          label: 'Contents',
          icon: 'pi pi-pi pi-bars',
        },
        {
          label: 'Search',
          icon: 'pi pi-pi pi-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace',
                },
              ],
            },
            {
              label: 'User',
              icon: 'pi pi-fw pi-file',
            },
          ],
        },
      ],
    },
    {
      label: 'Reports',
      icon: 'pi pi-fw pi-chart-bar',
      disabled: true,
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Save', icon: 'pi pi-fw pi-save' },
            { label: 'Update', icon: 'pi pi-fw pi-save' },
          ],
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }],
        },
      ],
    },
    {
      label: 'Badges',
      icon: 'pi pi-fw pi-id-card',
      disabled: true,
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Save', icon: 'pi pi-fw pi-save' },
            { label: 'Update', icon: 'pi pi-fw pi-save' },
          ],
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }],
        },
      ],
    },
    {
      label: 'Workflows',
      icon: 'pi pi-fw pi-sitemap',
      disabled: true,
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Save', icon: 'pi pi-fw pi-save' },
            { label: 'Update', icon: 'pi pi-fw pi-save' },
          ],
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }],
        },
      ],
    },
    {
      label: 'Administration',
      icon: 'pi pi-fw pi-sliders-h',
      disabled: true,
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Save', icon: 'pi pi-fw pi-save' },
            { label: 'Update', icon: 'pi pi-fw pi-save' },
          ],
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }],
        },
      ],
    },
    {
      label: 'System Settings',
      icon: 'pi pi-fw pi-cog',
      disabled: true,
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Save', icon: 'pi pi-fw pi-save' },
            { label: 'Update', icon: 'pi pi-fw pi-save' },
          ],
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }],
        },
      ],
    },
  ];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  notAnAction() {}

  showSideBar(option: string) {
    switch (option) {
      case 'r':
        this.displayRightSideBar = !this.displayRightSideBar;
        break;

      default:
        break;
    }
  }

  selectPerson(person: Person) {
    console.log(person);
    this.showSideBar('r');
    this.selectedPerson = person;
  }
}

interface Language {
  name: string;
  code: string;
}
