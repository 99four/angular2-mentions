import { ElementRef, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { MentionListComponent } from './mention-list.component';
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular2-mentions
 *
 * Copyright (c) 2017 Dan MacFarlane
 */
export declare class MentionDirective {
    private _element;
    private _componentResolver;
    private _viewContainerRef;
    mention: any[];
    mentionConfig: any;
    searchTerm: EventEmitter<{}>;
    itemSelected: EventEmitter<{}>;
    private triggerChar;
    private labelKey;
    private disableSearch;
    private maxItems;
    private mentionSelect;
    searchString: string;
    startPos: number;
    items: any[];
    startNode: any;
    searchList: MentionListComponent;
    stopSearch: boolean;
    iframe: any;
    constructor(_element: ElementRef, _componentResolver: ComponentFactoryResolver, _viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    setIframe(iframe: HTMLIFrameElement): void;
    stopEvent(event: any): void;
    blurHandler(event: any): void;
    keyHandler(event: any, nativeElement?: HTMLInputElement): boolean;
    updateSearchList(): void;
    showSearchList(nativeElement: HTMLInputElement): void;
}
