import { ComponentType } from 'react';
import { Theme } from '@material-ui/core';

type GeneralType = ComponentType<any>;

export interface ButtonsInterfaceInternal {
    CancelButton: GeneralType;
    CloseButton: GeneralType;
    SaveButton: GeneralType;
    DeleteButton: GeneralType;
}

export interface IconsInterfaceInternal {
    EditIcon: GeneralType;
    DeleteIcon: GeneralType;
    TreeAddIcon: GeneralType;
    TreeDeleteIcon: GeneralType;
    TreeEditIcon: GeneralType;
    TreeNodeIcon: GeneralType;
    TreeParentIcon: GeneralType;
    TreeCollapseIcon: GeneralType;
    TreeExpandIcon: GeneralType;
}

export interface ComponentsInterfaceInternal {
    AddResource: ComponentType;
    AddRole: ComponentType;
    RoleTag: ComponentType | React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
    CheckboxTableContainer: ComponentType | React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
}

export type ThemeType = { theme: Theme };

export type FnTreeBlockHandleOpenModal = (
    resourceRef: ResourcesItem | ResourcesItem['_resources'],
    parentResourceRef?: ResourcesItem | ResourcesItem['_resources'],
    resourceKey?: string,
    isDeleteModal?: boolean,
    isEditModal?: boolean
) => void;

export interface ResourcesItem {
    _resources: {
        [k: string]: {
            name: string;
        } & ResourcesItem;
    };
}

interface RoleItem {
    _roles: {
        [k: string]: {
            permissions: string[];
        };
    };
}

export interface PermissionsItem {
    _permissions: {
        [k: string]: {
            name: string;
        };
    };
}

export type PermissionsObject = ResourcesItem & RoleItem & PermissionsItem;
