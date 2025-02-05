

import {
  DesktopOutlined,
  DribbbleOutlined,
  SisternodeOutlined,
  MobileOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

export let items = [];

items = [
  {
    key: "/",
    route: "/",
    icon: <DesktopOutlined style={{ fontSize: "120%" }} />,
    label: "Dashboard",
    isSubmenu: false,
    defaultAccess: true,
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "120%" }} />,
    label: "Users",
    key: "/user-management",
    route: "/user-management",
    isSubmenu: false,
    access: "user-management",
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "120%" }} />,
    label: "Loan Management",
    key: "/loan-management",
    route: "/loan-management",
    isSubmenu: false,
    access: "sports",
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "120%" }} />,
    label: "FAQ",
    key: "/faq-management",
    route: "/faq-management",
    isSubmenu: false,
    access: "faq1",
  },
  {
    icon: <MobileOutlined style={{ fontSize: "120%" }} />,
    label: `App Management`,
    key: "/appmanagment",
    isSubmenu: true,
    multipleAccess: ["sports", "treatment"],
    SubMenu: [
      {
        icon: <DribbbleOutlined style={{ fontSize: "120%" }} />,
        label: "Sports",
        key: "/sports",
        route: "/sports",
        isSubmenu: false,
        access: "sports",
      },
      {
        icon: <SisternodeOutlined style={{ fontSize: "120%" }} />,
        label: "Treatment Plan",
        key: "/treatment-plan-management",
        route: "/treatment-plan-management",
        isSubmenu: false,
        access: "treatment",
       
      },
      
    ],
  },
];


export const  userData = {
  meta: {
    message: "User logged in successfully",
    success: true,
    status: 200,
  },
  data: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSIsInVuaXF1ZV9pZCI6Im02ZXRod3BmLWQzZTJlYWU0LTRiN2EtNGRjZC05MTQ1LTgyYjc4NjZiZDQxZSIsImZ1bGxfbmFtZSI6IlN1cGVyIEFkbWluIiwiZW1haWwiOiJzdXBlcmFkbWluLmZpbmFibHJAbWFpbGluYXRvci5jb20iLCJwaG9uZV9udW1iZXIiOiIrOTE5MTIzNDU2NzgiLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJTdXBlciBBZG1pbmlzdHJhdG9yIiwia2V5IjoiU1VQRVJfQURNSU4iLCJkZXNjcmlwdGlvbiI6bnVsbCwibW9kdWxlcyI6W3siaWQiOiIxIiwibmFtZSI6IlByb2ZpbGUiLCJrZXkiOiJwcm9maWxlIiwiZGVzY3JpcHRpb24iOm51bGwsInBlcm1pc3Npb25zIjpbeyJpZCI6IjIiLCJuYW1lIjoiQ3JlYXRlIiwia2V5IjoiY3JlYXRlIiwiZGVzY3JpcHRpb24iOm51bGx9LHsiaWQiOiIzIiwibmFtZSI6IlVwZGF0ZSIsImtleSI6InVwZGF0ZSIsImRlc2NyaXB0aW9uIjpudWxsfSx7ImlkIjoiNCIsIm5hbWUiOiJEZWxldGUiLCJrZXkiOiJkZWxldGUiLCJkZXNjcmlwdGlvbiI6bnVsbH1dfV19fSwiaWF0IjoxNzM3OTc4NjYxLCJleHAiOjE3MzgwNjUwNjF9.N3MxYf8vXaDYx37-8NKYMQl1elgqW231RJ-gmIeFoko",
    user: {
      id: "1",
      unique_id: "m6ethwpf-d3e2eae4-4b7a-4dcd-9145-82b7866bd41e",
      full_name: "Super Admin",
      email: "superadmin.finablr@mailinator.com",
      phone_number: "+91912345678",
      role: [{
        id: "1",
        name: "Super Administrator",
        key: "SUPER_ADMIN",
        description: null,
        modules: [
          {
            id: "1",
            name: "Profile",
            key: "profile",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-profile",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-profile",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-profile",
                description: null,
              },
            ],
          },
          {
            id: "2",
            name: "User Management",
            key: "user-management",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-user",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-user",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-user",
                description: null,
              },
            ],
          },
          {
            id: "3",
            name: "Sports Management",
            key: "sports",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-sports",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-sports",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-sports",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },
          {
            id: "4",
            name: "FAQ Management",
            key: "treatment",
            description: null,
            permissions: [
              {
                id: "2",
                name: "Create",
                key: "create-faq",
                description: null,
              },
              {
                id: "3",
                name: "Update",
                key: "update-faq",
                description: null,
              },
              {
                id: "4",
                name: "Delete",
                key: "delete-faq",
                description: null,
              },
            ],
          },

         
        ],
      }],
    },
  },
};