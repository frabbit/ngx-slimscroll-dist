import { InjectionToken, EventEmitter, ViewContainerRef, Inject, Renderer2, Optional, Input, Output, HostListener, Directive, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, merge, Subscription } from 'rxjs';
import { mergeMap, map, takeUntil } from 'rxjs/operators';

var SlimScrollEvent = /** @class */ (function () {
    function SlimScrollEvent(obj) {
        this.type = obj.type;
        this.y = obj && obj.y ? obj.y : 0;
        this.percent = obj && obj.percent ? obj.percent : 0;
        this.duration = obj && obj.duration ? obj.duration : 0;
        this.easing = obj && obj.easing ? obj.easing : 'linear';
    }
    return SlimScrollEvent;
}());

var SLIMSCROLL_DEFAULTS = new InjectionToken('NGX_SLIMSCROLL_DEFAULTS');
var SlimScrollOptions = /** @class */ (function () {
    function SlimScrollOptions(obj) {
        this.position = obj && obj.position ? obj.position : 'right';
        this.barBackground = obj && obj.barBackground ? obj.barBackground : '#343a40';
        this.barOpacity = obj && obj.barOpacity ? obj.barOpacity : '1';
        this.barWidth = obj && obj.barWidth ? obj.barWidth : '12';
        this.barBorderRadius = obj && obj.barBorderRadius ? obj.barBorderRadius : '5';
        this.barMargin = obj && obj.barMargin ? obj.barMargin : '1px 0';
        this.gridBackground = obj && obj.gridBackground ? obj.gridBackground : '#adb5bd';
        this.gridOpacity = obj && obj.gridOpacity ? obj.gridOpacity : '1';
        this.gridWidth = obj && obj.gridWidth ? obj.gridWidth : '8';
        this.gridBorderRadius = obj && obj.gridBorderRadius ? obj.gridBorderRadius : '10';
        this.gridMargin = obj && obj.gridMargin ? obj.gridMargin : '1px 2px';
        this.alwaysVisible = obj && typeof obj.alwaysVisible !== 'undefined' ? obj.alwaysVisible : true;
        this.visibleTimeout = obj && obj.visibleTimeout ? obj.visibleTimeout : 1000;
    }
    SlimScrollOptions.prototype.merge = function (obj) {
        var result = new SlimScrollOptions();
        result.position = obj && obj.position ? obj.position : this.position;
        result.barBackground = obj && obj.barBackground ? obj.barBackground : this.barBackground;
        result.barOpacity = obj && obj.barOpacity ? obj.barOpacity : this.barOpacity;
        result.barWidth = obj && obj.barWidth ? obj.barWidth : this.barWidth;
        result.barBorderRadius = obj && obj.barBorderRadius ? obj.barBorderRadius : this.barBorderRadius;
        result.barMargin = obj && obj.barMargin ? obj.barMargin : this.barMargin;
        result.gridBackground = obj && obj.gridBackground ? obj.gridBackground : this.gridBackground;
        result.gridOpacity = obj && obj.gridOpacity ? obj.gridOpacity : this.gridOpacity;
        result.gridWidth = obj && obj.gridWidth ? obj.gridWidth : this.gridWidth;
        result.gridBorderRadius = obj && obj.gridBorderRadius ? obj.gridBorderRadius : this.gridBorderRadius;
        result.gridMargin = obj && obj.gridMargin ? obj.gridMargin : this.gridMargin;
        result.alwaysVisible = obj && typeof obj.alwaysVisible !== 'undefined' ? obj.alwaysVisible : this.alwaysVisible;
        result.visibleTimeout = obj && obj.visibleTimeout ? obj.visibleTimeout : this.visibleTimeout;
        return result;
    };
    return SlimScrollOptions;
}());

var SlimScrollState = /** @class */ (function () {
    function SlimScrollState(obj) {
        this.scrollPosition = obj && obj.scrollPosition ? obj.scrollPosition : 0;
        this.isScrollAtStart = obj && typeof obj.isScrollAtStart !== 'undefined' ? obj.isScrollAtStart : true;
        this.isScrollAtEnd = obj && typeof obj.isScrollAtEnd !== 'undefined' ? obj.isScrollAtEnd : false;
    }
    return SlimScrollState;
}());

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var ɵ0 = function (t) { return t; }, ɵ1 = function (t) { return t * t; }, ɵ2 = function (t) { return t * (2 - t); }, ɵ3 = function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }, ɵ4 = function (t) { return t * t * t; }, ɵ5 = function (t) { return (--t) * t * t + 1; }, ɵ6 = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; }, ɵ7 = function (t) { return t * t * t * t; }, ɵ8 = function (t) { return 1 - (--t) * t * t * t; }, ɵ9 = function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; }, ɵ10 = function (t) { return t * t * t * t * t; }, ɵ11 = function (t) { return 1 + (--t) * t * t * t * t; }, ɵ12 = function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; };
var easing = {
    linear: ɵ0,
    inQuad: ɵ1,
    outQuad: ɵ2,
    inOutQuad: ɵ3,
    inCubic: ɵ4,
    outCubic: ɵ5,
    inOutCubic: ɵ6,
    inQuart: ɵ7,
    outQuart: ɵ8,
    inOutQuart: ɵ9,
    inQuint: ɵ10,
    outQuint: ɵ11,
    inOutQuint: ɵ12
};
var SlimScrollDirective = /** @class */ (function () {
    function SlimScrollDirective(viewContainer, renderer, document, optionsDefaults) {
        var _this = this;
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.document = document;
        this.optionsDefaults = optionsDefaults;
        this.enabled = true;
        this.scrollChanged = new EventEmitter();
        this.barVisibilityChange = new EventEmitter();
        this.initWheel = function () {
            var dommousescroll = fromEvent(_this.el, 'DOMMouseScroll');
            var mousewheel = fromEvent(_this.el, 'mousewheel');
            var wheelSubscription = merge.apply(void 0, __spread([dommousescroll, mousewheel])).subscribe(function (e) {
                var delta = 0;
                if (e.wheelDelta) {
                    delta = -e.wheelDelta / 120;
                }
                if (e.detail) {
                    delta = e.detail / 3;
                }
                _this.scrollContent(delta, true, false);
                if (e.preventDefault) {
                    e.preventDefault();
                }
            });
            _this.interactionSubscriptions.add(wheelSubscription);
        };
        this.initDrag = function () {
            var bar = _this.bar;
            var mousemove = fromEvent(_this.document.documentElement, 'mousemove');
            var touchmove = fromEvent(_this.document.documentElement, 'touchmove');
            var mousedown = fromEvent(bar, 'mousedown');
            var touchstart = fromEvent(_this.el, 'touchstart');
            var mouseup = fromEvent(_this.document.documentElement, 'mouseup');
            var touchend = fromEvent(_this.document.documentElement, 'touchend');
            var mousedrag = mousedown
                .pipe(mergeMap(function (e) {
                _this.pageY = e.pageY;
                _this.top = parseFloat(getComputedStyle(bar).top);
                return mousemove
                    .pipe(map(function (emove) {
                    emove.preventDefault();
                    return _this.top + emove.pageY - _this.pageY;
                }), takeUntil(mouseup));
            }));
            var touchdrag = touchstart
                .pipe(mergeMap(function (e) {
                _this.pageY = e.targetTouches[0].pageY;
                _this.top = -parseFloat(getComputedStyle(bar).top);
                return touchmove
                    .pipe(map(function (tmove) {
                    return -(_this.top + tmove.targetTouches[0].pageY - _this.pageY);
                }), takeUntil(touchend));
            }));
            var dragSubscription = merge.apply(void 0, __spread([mousedrag, touchdrag])).subscribe(function (top) {
                _this.body.addEventListener('selectstart', _this.preventDefaultEvent, false);
                _this.renderer.setStyle(_this.body, 'touch-action', 'pan-y');
                _this.renderer.setStyle(_this.body, 'user-select', 'none');
                _this.renderer.setStyle(_this.bar, 'top', top + "px");
                var over = _this.scrollContent(0, true, false);
                var maxTop = _this.el.offsetHeight - _this.bar.offsetHeight;
                if (over && over < 0 && -over <= maxTop) {
                    _this.renderer.setStyle(_this.el, 'paddingTop', -over + 'px');
                }
                else if (over && over > 0 && over <= maxTop) {
                    _this.renderer.setStyle(_this.el, 'paddingBottom', over + 'px');
                }
            });
            var dragEndSubscription = merge.apply(void 0, __spread([mouseup, touchend])).subscribe(function () {
                _this.body.removeEventListener('selectstart', _this.preventDefaultEvent, false);
                var paddingTop = parseInt(_this.el.style.paddingTop, 10);
                var paddingBottom = parseInt(_this.el.style.paddingBottom, 10);
                _this.renderer.setStyle(_this.body, 'touch-action', 'unset');
                _this.renderer.setStyle(_this.body, 'user-select', 'default');
                if (paddingTop > 0) {
                    _this.scrollTo(0, 300, 'linear');
                }
                else if (paddingBottom > 0) {
                    _this.scrollTo(0, 300, 'linear');
                }
            });
            _this.interactionSubscriptions.add(dragSubscription);
            _this.interactionSubscriptions.add(dragEndSubscription);
        };
        this.preventDefaultEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
        this.viewContainer = viewContainer;
        this.el = viewContainer.element.nativeElement;
        this.body = this.document.querySelector('body');
        this.mutationThrottleTimeout = 50;
    }
    SlimScrollDirective.prototype.ngOnInit = function () {
        // setup if no changes for enabled for the first time
        if (!this.interactionSubscriptions && this.enabled) {
            this.setup();
        }
    };
    SlimScrollDirective.prototype.ngOnChanges = function (changes) {
        if (changes.enabled) {
            if (this.enabled) {
                this.setup();
            }
            else {
                this.destroy();
            }
        }
    };
    SlimScrollDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    SlimScrollDirective.prototype.setup = function () {
        var _this = this;
        this.interactionSubscriptions = new Subscription();
        if (this.optionsDefaults) {
            this.options = new SlimScrollOptions(this.optionsDefaults).merge(this.options);
        }
        else {
            this.options = new SlimScrollOptions(this.options);
        }
        this.setStyle();
        this.wrapContainer();
        this.initGrid();
        this.initBar();
        this.getBarHeight();
        this.initWheel();
        this.initDrag();
        if (!this.options.alwaysVisible) {
            this.hideBarAndGrid();
        }
        if (MutationObserver) {
            if (this.mutationObserver) {
                this.mutationObserver.disconnect();
            }
            this.mutationObserver = new MutationObserver(function () {
                if (_this.mutationThrottleTimeout) {
                    clearTimeout(_this.mutationThrottleTimeout);
                    _this.mutationThrottleTimeout = setTimeout(_this.onMutation.bind(_this), 50);
                }
            });
            this.mutationObserver.observe(this.el, { subtree: true, childList: true });
        }
        if (this.scrollEvents && this.scrollEvents instanceof EventEmitter) {
            var scrollSubscription = this.scrollEvents.subscribe(function (event) { return _this.handleEvent(event); });
            this.interactionSubscriptions.add(scrollSubscription);
        }
    };
    SlimScrollDirective.prototype.handleEvent = function (e) {
        if (e.type === 'scrollToBottom') {
            var y = this.el.scrollHeight - this.el.clientHeight;
            this.scrollTo(y, e.duration, e.easing);
        }
        else if (e.type === 'scrollToTop') {
            var y = 0;
            this.scrollTo(y, e.duration, e.easing);
        }
        else if (e.type === 'scrollToPercent' && (e.percent >= 0 && e.percent <= 100)) {
            var y = Math.round(((this.el.scrollHeight - this.el.clientHeight) / 100) * e.percent);
            this.scrollTo(y, e.duration, e.easing);
        }
        else if (e.type === 'scrollTo') {
            var y = e.y;
            if (y <= this.el.scrollHeight - this.el.clientHeight && y >= 0) {
                this.scrollTo(y, e.duration, e.easing);
            }
        }
        else if (e.type === 'recalculate') {
            this.getBarHeight();
        }
    };
    SlimScrollDirective.prototype.setStyle = function () {
        var el = this.el;
        this.renderer.setStyle(el, 'overflow', 'hidden');
        this.renderer.setStyle(el, 'position', 'relative');
        this.renderer.setStyle(el, 'display', 'block');
    };
    SlimScrollDirective.prototype.onMutation = function () {
        this.getBarHeight();
    };
    SlimScrollDirective.prototype.wrapContainer = function () {
        this.wrapper = this.renderer.createElement('div');
        var wrapper = this.wrapper;
        var el = this.el;
        this.renderer.addClass(wrapper, 'slimscroll-wrapper');
        this.renderer.setStyle(wrapper, 'position', 'relative');
        this.renderer.setStyle(wrapper, 'overflow', 'hidden');
        this.renderer.setStyle(wrapper, 'display', 'inline-block');
        this.renderer.setStyle(wrapper, 'margin', getComputedStyle(el).margin);
        this.renderer.setStyle(wrapper, 'width', '100%');
        this.renderer.setStyle(wrapper, 'height', getComputedStyle(el).height);
        this.renderer.insertBefore(el.parentNode, wrapper, el);
        this.renderer.appendChild(wrapper, el);
    };
    SlimScrollDirective.prototype.initGrid = function () {
        this.grid = this.renderer.createElement('div');
        var grid = this.grid;
        this.renderer.addClass(grid, 'slimscroll-grid');
        this.renderer.setStyle(grid, 'position', 'absolute');
        this.renderer.setStyle(grid, 'top', '0');
        this.renderer.setStyle(grid, 'bottom', '0');
        this.renderer.setStyle(grid, this.options.position, '0');
        this.renderer.setStyle(grid, 'width', this.options.gridWidth + "px");
        this.renderer.setStyle(grid, 'background', this.options.gridBackground);
        this.renderer.setStyle(grid, 'opacity', this.options.gridOpacity);
        this.renderer.setStyle(grid, 'display', 'block');
        this.renderer.setStyle(grid, 'cursor', 'pointer');
        this.renderer.setStyle(grid, 'z-index', '99');
        this.renderer.setStyle(grid, 'border-radius', this.options.gridBorderRadius + "px");
        this.renderer.setStyle(grid, 'margin', this.options.gridMargin);
        this.renderer.appendChild(this.wrapper, grid);
    };
    SlimScrollDirective.prototype.initBar = function () {
        this.bar = this.renderer.createElement('div');
        var bar = this.bar;
        this.renderer.addClass(bar, 'slimscroll-bar');
        this.renderer.setStyle(bar, 'position', 'absolute');
        this.renderer.setStyle(bar, 'top', '0');
        this.renderer.setStyle(bar, this.options.position, '0');
        this.renderer.setStyle(bar, 'width', this.options.barWidth + "px");
        this.renderer.setStyle(bar, 'background', this.options.barBackground);
        this.renderer.setStyle(bar, 'opacity', this.options.barOpacity);
        this.renderer.setStyle(bar, 'display', 'block');
        this.renderer.setStyle(bar, 'cursor', 'pointer');
        this.renderer.setStyle(bar, 'z-index', '100');
        this.renderer.setStyle(bar, 'border-radius', this.options.barBorderRadius + "px");
        this.renderer.setStyle(bar, 'margin', this.options.barMargin);
        this.renderer.appendChild(this.wrapper, bar);
        this.barVisibilityChange.emit(true);
    };
    SlimScrollDirective.prototype.getBarHeight = function () {
        var elHeight = this.el.offsetHeight;
        var barHeight = Math.max((elHeight / this.el.scrollHeight) * elHeight, 30) + 'px';
        var display = parseInt(barHeight, 10) === elHeight ? 'none' : 'block';
        if (this.wrapper.offsetHeight !== elHeight) {
            this.renderer.setStyle(this.wrapper, 'height', elHeight + 'px');
        }
        this.renderer.setStyle(this.bar, 'height', barHeight);
        this.renderer.setStyle(this.bar, 'display', display);
        this.renderer.setStyle(this.grid, 'display', display);
        this.barVisibilityChange.emit(display !== 'none');
    };
    SlimScrollDirective.prototype.scrollTo = function (y, duration, easingFunc) {
        var _this = this;
        var start = Date.now();
        var from = this.el.scrollTop;
        var maxTop = this.el.offsetHeight - this.bar.offsetHeight;
        var maxElScrollTop = this.el.scrollHeight - this.el.clientHeight;
        var barHeight = Math.max((this.el.offsetHeight / this.el.scrollHeight) * this.el.offsetHeight, 30);
        var paddingTop = parseInt(this.el.style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(this.el.style.paddingBottom, 10) || 0;
        var scroll = function (timestamp) {
            var currentTime = Date.now();
            var time = Math.min(1, ((currentTime - start) / duration));
            var easedTime = easing[easingFunc](time);
            if (paddingTop > 0 || paddingBottom > 0) {
                var fromY = null;
                if (paddingTop > 0) {
                    fromY = -paddingTop;
                    fromY = -((easedTime * (y - fromY)) + fromY);
                    _this.renderer.setStyle(_this.el, 'paddingTop', fromY + "px");
                }
                if (paddingBottom > 0) {
                    fromY = paddingBottom;
                    fromY = ((easedTime * (y - fromY)) + fromY);
                    _this.renderer.setStyle(_this.el, 'paddingBottom', fromY + "px");
                }
            }
            else {
                _this.el.scrollTop = (easedTime * (y - from)) + from;
            }
            var percentScroll = _this.el.scrollTop / maxElScrollTop;
            if (paddingBottom === 0) {
                var delta = Math.round(Math.round(_this.el.clientHeight * percentScroll) - barHeight);
                if (delta > 0) {
                    _this.renderer.setStyle(_this.bar, 'top', delta + "px");
                }
            }
            if (time < 1) {
                requestAnimationFrame(scroll);
            }
        };
        requestAnimationFrame(scroll);
    };
    SlimScrollDirective.prototype.scrollContent = function (y, isWheel, isJump) {
        var _this = this;
        var delta = y;
        var maxTop = this.el.offsetHeight - this.bar.offsetHeight;
        var hiddenContent = this.el.scrollHeight - this.el.offsetHeight;
        var percentScroll;
        var over = null;
        if (isWheel) {
            delta = parseInt(getComputedStyle(this.bar).top, 10) + y * 20 / 100 * this.bar.offsetHeight;
            if (delta < 0 || delta > maxTop) {
                over = delta > maxTop ? delta - maxTop : delta;
            }
            delta = Math.min(Math.max(delta, 0), maxTop);
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
            this.renderer.setStyle(this.bar, 'top', delta + 'px');
        }
        percentScroll = parseInt(getComputedStyle(this.bar).top, 10) / (this.el.offsetHeight - this.bar.offsetHeight);
        delta = percentScroll * hiddenContent;
        this.el.scrollTop = delta;
        this.showBarAndGrid();
        if (!this.options.alwaysVisible) {
            if (this.visibleTimeout) {
                clearTimeout(this.visibleTimeout);
            }
            this.visibleTimeout = setTimeout(function () {
                _this.hideBarAndGrid();
            }, this.options.visibleTimeout);
        }
        var isScrollAtStart = delta === 0;
        var isScrollAtEnd = delta === hiddenContent;
        var scrollPosition = Math.ceil(delta);
        var scrollState = new SlimScrollState({ scrollPosition: scrollPosition, isScrollAtStart: isScrollAtStart, isScrollAtEnd: isScrollAtEnd });
        this.scrollChanged.emit(scrollState);
        return over;
    };
    SlimScrollDirective.prototype.showBarAndGrid = function () {
        this.renderer.setStyle(this.grid, 'background', this.options.gridBackground);
        this.renderer.setStyle(this.bar, 'background', this.options.barBackground);
    };
    SlimScrollDirective.prototype.hideBarAndGrid = function () {
        this.renderer.setStyle(this.grid, 'background', 'transparent');
        this.renderer.setStyle(this.bar, 'background', 'transparent');
    };
    SlimScrollDirective.prototype.destroy = function () {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
            this.mutationObserver = null;
        }
        if (this.el.parentElement.classList.contains('slimscroll-wrapper')) {
            var wrapper = this.el.parentElement;
            var bar = wrapper.querySelector('.slimscroll-bar');
            wrapper.removeChild(bar);
            var grid = wrapper.querySelector('.slimscroll-grid');
            wrapper.removeChild(grid);
            this.unwrap(wrapper);
        }
        if (this.interactionSubscriptions) {
            this.interactionSubscriptions.unsubscribe();
        }
    };
    SlimScrollDirective.prototype.unwrap = function (wrapper) {
        var docFrag = document.createDocumentFragment();
        while (wrapper.firstChild) {
            var child = wrapper.removeChild(wrapper.firstChild);
            docFrag.appendChild(child);
        }
        wrapper.parentNode.replaceChild(docFrag, wrapper);
    };
    SlimScrollDirective.prototype.onResize = function ($event) {
        this.getBarHeight();
    };
    SlimScrollDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
        { type: Renderer2, decorators: [{ type: Inject, args: [Renderer2,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [SLIMSCROLL_DEFAULTS,] }, { type: Optional }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SlimScrollDirective.prototype, "enabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", SlimScrollOptions)
    ], SlimScrollDirective.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", EventEmitter)
    ], SlimScrollDirective.prototype, "scrollEvents", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SlimScrollDirective.prototype, "scrollChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SlimScrollDirective.prototype, "barVisibilityChange", void 0);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlimScrollDirective.prototype, "onResize", null);
    SlimScrollDirective = __decorate([
        Directive({
            selector: '[slimScroll]',
            exportAs: 'slimScroll'
        }),
        __param(0, Inject(ViewContainerRef)),
        __param(1, Inject(Renderer2)),
        __param(2, Inject(DOCUMENT)),
        __param(3, Inject(SLIMSCROLL_DEFAULTS)), __param(3, Optional()),
        __metadata("design:paramtypes", [ViewContainerRef,
            Renderer2, Object, Object])
    ], SlimScrollDirective);
    return SlimScrollDirective;
}());

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgSlimScrollModule = /** @class */ (function () {
    function NgSlimScrollModule() {
    }
    NgSlimScrollModule = __decorate$1([
        NgModule({
            declarations: [
                SlimScrollDirective
            ],
            exports: [
                SlimScrollDirective
            ]
        })
    ], NgSlimScrollModule);
    return NgSlimScrollModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { NgSlimScrollModule, SLIMSCROLL_DEFAULTS, SlimScrollDirective, SlimScrollEvent, SlimScrollOptions, easing, ɵ0, ɵ1, ɵ10, ɵ11, ɵ12, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9 };
//# sourceMappingURL=ngx-slimscroll.js.map
