export type Locales = 'en'
export type ButtonColors = 'fleet-red' | 'alliance-blue' | 'militia-purple' | 'green' | 'transparent'
export type ButtonSizes = 'sm' | 'lg'
export type BadgeColors = 'fleet-red' | 'alliance-blue' | 'militia-purple' | 'green' | 'fleet-yellow'
export type TagColors = 'fleet-red' | 'alliance-blue' | 'militia-purple' | 'green'
export type FlexInlineJustify = 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between'

export type spaces = '0' | '1px' | '2px' | 'var(--component-block-gap)' | 'var(--space-3xs)' | 'var(--space-2xs)' | 'var(--space-xs)' 
| 'var(--space-s)' | 'var(--space-m)' | 'var(--space-l)' | 'var(--space-xl)' | 'var(--space-2xl)' | 'var(--space-3xl)' 
| 'var(--space-3xs-2xs)' | 'var(--space-2xs-xs)' | 'var(--space-xs-s)' | 'var(--space-s-m)' | 'var(--space-m-l)' 
| 'var(--space-l-xl)' | 'var(--space-xl-2xl)' | 'var(--space-2xl-3xl)' | 'var(--space-s-l)'

export interface Tag {
    name:        string;
    color:       string;
    description: string;
}

export interface Alert {
    title:          string;
    content:        string;
    partial?:       string;
    hx?:            HXDialogOptions;
}

export type RequestType = 'get' | 'post' | 'put' | 'patch' | 'delete'

export interface HXDialogOptions {
    method?:    RequestType;
    url?:       string;
    target?:    string;
    swap?:      string;
}

export interface PageCoverOptions {
    image:          string;
    image_990:      string;
    alt?:           string;
    animated?:      boolean;
    scrollable?:    boolean;
    overlay?:       boolean;
}

export interface ViewportComponents {   
	alert_dialog?:			boolean;
	confirm_dialog?:		boolean;
	modal?:		            boolean;
}

export interface ErrorRefetchParams {
    partial:    string;
    message:    string;
    delay:      number;
    target?:    string,
}

export interface SelectOptions {
    value?: string | number;
    label:  string;
    image?: string;
}