import { InjectionToken } from '@angular/core';
export const SLIMSCROLL_DEFAULTS = new InjectionToken('NGX_SLIMSCROLL_DEFAULTS');
export class SlimScrollOptions {
    constructor(obj) {
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
    merge(obj) {
        const result = new SlimScrollOptions();
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpbXNjcm9sbC1vcHRpb25zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNsaW1zY3JvbGwvIiwic291cmNlcyI6WyJzcmMvY2xhc3Nlcy9zbGltc2Nyb2xsLW9wdGlvbnMuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCL0MsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQzFCLElBQUksY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFcEQsTUFBTSxPQUFPLGlCQUFpQjtJQWU1QixZQUFZLEdBQXdCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5RSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQXdCO1FBQ25DLE1BQU0sTUFBTSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUV2QyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekYsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3RSxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxlQUFlLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDakcsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6RSxNQUFNLENBQUMsY0FBYyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDakYsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6RSxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDckcsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3RSxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hILE1BQU0sQ0FBQyxjQUFjLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFN0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2xpbVNjcm9sbE9wdGlvbnMge1xuICBwb3NpdGlvbj86IHN0cmluZztcbiAgYmFyQmFja2dyb3VuZD86IHN0cmluZztcbiAgYmFyT3BhY2l0eT86IHN0cmluZztcbiAgYmFyV2lkdGg/OiBzdHJpbmc7XG4gIGJhckJvcmRlclJhZGl1cz86IHN0cmluZztcbiAgYmFyTWFyZ2luPzogc3RyaW5nO1xuICBncmlkQmFja2dyb3VuZD86IHN0cmluZztcbiAgZ3JpZE9wYWNpdHk/OiBzdHJpbmc7XG4gIGdyaWRXaWR0aD86IHN0cmluZztcbiAgZ3JpZEJvcmRlclJhZGl1cz86IHN0cmluZztcbiAgZ3JpZE1hcmdpbj86IHN0cmluZztcbiAgYWx3YXlzVmlzaWJsZT86IGJvb2xlYW47XG4gIHZpc2libGVUaW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU0xJTVNDUk9MTF9ERUZBVUxUUzogSW5qZWN0aW9uVG9rZW48SVNsaW1TY3JvbGxPcHRpb25zPlxuICAgID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hfU0xJTVNDUk9MTF9ERUZBVUxUUycpO1xuXG5leHBvcnQgY2xhc3MgU2xpbVNjcm9sbE9wdGlvbnMgaW1wbGVtZW50cyBJU2xpbVNjcm9sbE9wdGlvbnMge1xuICBwb3NpdGlvbj86IHN0cmluZztcbiAgYmFyQmFja2dyb3VuZD86IHN0cmluZztcbiAgYmFyT3BhY2l0eT86IHN0cmluZztcbiAgYmFyV2lkdGg/OiBzdHJpbmc7XG4gIGJhckJvcmRlclJhZGl1cz86IHN0cmluZztcbiAgYmFyTWFyZ2luPzogc3RyaW5nO1xuICBncmlkQmFja2dyb3VuZD86IHN0cmluZztcbiAgZ3JpZE9wYWNpdHk/OiBzdHJpbmc7XG4gIGdyaWRXaWR0aD86IHN0cmluZztcbiAgZ3JpZEJvcmRlclJhZGl1cz86IHN0cmluZztcbiAgZ3JpZE1hcmdpbj86IHN0cmluZztcbiAgYWx3YXlzVmlzaWJsZT86IGJvb2xlYW47XG4gIHZpc2libGVUaW1lb3V0PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG9iaj86IElTbGltU2Nyb2xsT3B0aW9ucykge1xuICAgIHRoaXMucG9zaXRpb24gPSBvYmogJiYgb2JqLnBvc2l0aW9uID8gb2JqLnBvc2l0aW9uIDogJ3JpZ2h0JztcbiAgICB0aGlzLmJhckJhY2tncm91bmQgPSBvYmogJiYgb2JqLmJhckJhY2tncm91bmQgPyBvYmouYmFyQmFja2dyb3VuZCA6ICcjMzQzYTQwJztcbiAgICB0aGlzLmJhck9wYWNpdHkgPSBvYmogJiYgb2JqLmJhck9wYWNpdHkgPyBvYmouYmFyT3BhY2l0eSA6ICcxJztcbiAgICB0aGlzLmJhcldpZHRoID0gb2JqICYmIG9iai5iYXJXaWR0aCA/IG9iai5iYXJXaWR0aCA6ICcxMic7XG4gICAgdGhpcy5iYXJCb3JkZXJSYWRpdXMgPSBvYmogJiYgb2JqLmJhckJvcmRlclJhZGl1cyA/IG9iai5iYXJCb3JkZXJSYWRpdXMgOiAnNSc7XG4gICAgdGhpcy5iYXJNYXJnaW4gPSBvYmogJiYgb2JqLmJhck1hcmdpbiA/IG9iai5iYXJNYXJnaW4gOiAnMXB4IDAnO1xuICAgIHRoaXMuZ3JpZEJhY2tncm91bmQgPSBvYmogJiYgb2JqLmdyaWRCYWNrZ3JvdW5kID8gb2JqLmdyaWRCYWNrZ3JvdW5kIDogJyNhZGI1YmQnO1xuICAgIHRoaXMuZ3JpZE9wYWNpdHkgPSBvYmogJiYgb2JqLmdyaWRPcGFjaXR5ID8gb2JqLmdyaWRPcGFjaXR5IDogJzEnO1xuICAgIHRoaXMuZ3JpZFdpZHRoID0gb2JqICYmIG9iai5ncmlkV2lkdGggPyBvYmouZ3JpZFdpZHRoIDogJzgnO1xuICAgIHRoaXMuZ3JpZEJvcmRlclJhZGl1cyA9IG9iaiAmJiBvYmouZ3JpZEJvcmRlclJhZGl1cyA/IG9iai5ncmlkQm9yZGVyUmFkaXVzIDogJzEwJztcbiAgICB0aGlzLmdyaWRNYXJnaW4gPSBvYmogJiYgb2JqLmdyaWRNYXJnaW4gPyBvYmouZ3JpZE1hcmdpbiA6ICcxcHggMnB4JztcbiAgICB0aGlzLmFsd2F5c1Zpc2libGUgPSBvYmogJiYgdHlwZW9mIG9iai5hbHdheXNWaXNpYmxlICE9PSAndW5kZWZpbmVkJyA/IG9iai5hbHdheXNWaXNpYmxlIDogdHJ1ZTtcbiAgICB0aGlzLnZpc2libGVUaW1lb3V0ID0gb2JqICYmIG9iai52aXNpYmxlVGltZW91dCA/IG9iai52aXNpYmxlVGltZW91dCA6IDEwMDA7XG4gIH1cblxuICBwdWJsaWMgbWVyZ2Uob2JqPzogSVNsaW1TY3JvbGxPcHRpb25zKTogU2xpbVNjcm9sbE9wdGlvbnMge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTbGltU2Nyb2xsT3B0aW9ucygpO1xuXG4gICAgcmVzdWx0LnBvc2l0aW9uID0gb2JqICYmIG9iai5wb3NpdGlvbiA/IG9iai5wb3NpdGlvbiA6IHRoaXMucG9zaXRpb247XG4gICAgcmVzdWx0LmJhckJhY2tncm91bmQgPSBvYmogJiYgb2JqLmJhckJhY2tncm91bmQgPyBvYmouYmFyQmFja2dyb3VuZCA6IHRoaXMuYmFyQmFja2dyb3VuZDtcbiAgICByZXN1bHQuYmFyT3BhY2l0eSA9IG9iaiAmJiBvYmouYmFyT3BhY2l0eSA/IG9iai5iYXJPcGFjaXR5IDogdGhpcy5iYXJPcGFjaXR5O1xuICAgIHJlc3VsdC5iYXJXaWR0aCA9IG9iaiAmJiBvYmouYmFyV2lkdGggPyBvYmouYmFyV2lkdGggOiB0aGlzLmJhcldpZHRoO1xuICAgIHJlc3VsdC5iYXJCb3JkZXJSYWRpdXMgPSBvYmogJiYgb2JqLmJhckJvcmRlclJhZGl1cyA/IG9iai5iYXJCb3JkZXJSYWRpdXMgOiB0aGlzLmJhckJvcmRlclJhZGl1cztcbiAgICByZXN1bHQuYmFyTWFyZ2luID0gb2JqICYmIG9iai5iYXJNYXJnaW4gPyBvYmouYmFyTWFyZ2luIDogdGhpcy5iYXJNYXJnaW47XG4gICAgcmVzdWx0LmdyaWRCYWNrZ3JvdW5kID0gb2JqICYmIG9iai5ncmlkQmFja2dyb3VuZCA/IG9iai5ncmlkQmFja2dyb3VuZCA6IHRoaXMuZ3JpZEJhY2tncm91bmQ7XG4gICAgcmVzdWx0LmdyaWRPcGFjaXR5ID0gb2JqICYmIG9iai5ncmlkT3BhY2l0eSA/IG9iai5ncmlkT3BhY2l0eSA6IHRoaXMuZ3JpZE9wYWNpdHk7XG4gICAgcmVzdWx0LmdyaWRXaWR0aCA9IG9iaiAmJiBvYmouZ3JpZFdpZHRoID8gb2JqLmdyaWRXaWR0aCA6IHRoaXMuZ3JpZFdpZHRoO1xuICAgIHJlc3VsdC5ncmlkQm9yZGVyUmFkaXVzID0gb2JqICYmIG9iai5ncmlkQm9yZGVyUmFkaXVzID8gb2JqLmdyaWRCb3JkZXJSYWRpdXMgOiB0aGlzLmdyaWRCb3JkZXJSYWRpdXM7XG4gICAgcmVzdWx0LmdyaWRNYXJnaW4gPSBvYmogJiYgb2JqLmdyaWRNYXJnaW4gPyBvYmouZ3JpZE1hcmdpbiA6IHRoaXMuZ3JpZE1hcmdpbjtcbiAgICByZXN1bHQuYWx3YXlzVmlzaWJsZSA9IG9iaiAmJiB0eXBlb2Ygb2JqLmFsd2F5c1Zpc2libGUgIT09ICd1bmRlZmluZWQnID8gb2JqLmFsd2F5c1Zpc2libGUgOiB0aGlzLmFsd2F5c1Zpc2libGU7XG4gICAgcmVzdWx0LnZpc2libGVUaW1lb3V0ID0gb2JqICYmIG9iai52aXNpYmxlVGltZW91dCA/IG9iai52aXNpYmxlVGltZW91dCA6IHRoaXMudmlzaWJsZVRpbWVvdXQ7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=