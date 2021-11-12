import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

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

  // {label: 'Update', icon: 'pi pi-refresh', command: () => {
  //     this.notAnAction();
  // },{label: 'Delete', icon: 'pi pi-times', command: () => {
  //     this.notAnAction();
  // },{label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
  // {separator: true},
  // {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  // ];

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-pw pi-table',
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
            },
            {
              label: 'New',
            },
          ],
        },
        {
          label: 'Accounts',
          icon: 'pi pi-fw pi-desktop',
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
}

interface Language {
  name: string;
  code: string;
}
