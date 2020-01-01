"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapComponentMessages;
(function (MapComponentMessages) {
    MapComponentMessages["MAP_COMPONENT_MOUNTED"] = "MAP_COMPONENT_MOUNTED";
    MapComponentMessages["DOCUMENT_EVENT_LISTENER_ADDED"] = "DOCUMENT_EVENT_LISTENER_ADDED";
    MapComponentMessages["WINDOW_EVENT_LISTENER_ADDED"] = "WINDOW_EVENT_LISTENER_ADDED";
    MapComponentMessages["UNABLE_TO_ADD_EVENT_LISTENER"] = "UNABLE_TO_ADD_EVENT_LISTENER";
    MapComponentMessages["DOCUMENT_EVENT_LISTENER_REMOVED"] = "DOCUMENT_EVENT_LISTENER_REMOVED";
    MapComponentMessages["WINDOW_EVENT_LISTENER_REMOVED"] = "WINDOW_EVENT_LISTENER_REMOVED";
})(MapComponentMessages = exports.MapComponentMessages || (exports.MapComponentMessages = {}));
var MapEvent;
(function (MapEvent) {
    MapEvent["ON_MOVE_END"] = "onMoveEnd";
    MapEvent["ON_MOVE_START"] = "onMoveStart";
    MapEvent["ON_MOVE"] = "onMove";
    MapEvent["ON_RESIZE"] = "onResize";
    MapEvent["ON_UNLOAD"] = "onUnload";
    MapEvent["ON_VIEW_RESET"] = "onViewReset";
    MapEvent["ON_ZOOM_END"] = "onZoomEnd";
    MapEvent["ON_ZOOM_LEVELS_CHANGE"] = "onZoomLevelsChange";
    MapEvent["ON_ZOOM_START"] = "onZoomStart";
    MapEvent["ON_ZOOM"] = "onZoom";
    MapEvent["ON_MAP_CLICKED"] = "onMapClicked";
    MapEvent["ON_MAP_MARKER_CLICKED"] = "onMapMarkerClicked";
})(MapEvent = exports.MapEvent || (exports.MapEvent = {}));
var AnimationType;
(function (AnimationType) {
    AnimationType["BOUNCE"] = "bounce";
    AnimationType["FADE"] = "fade";
    AnimationType["PULSE"] = "pulse";
    AnimationType["JUMP"] = "jump";
    AnimationType["SPIN"] = "spin";
    AnimationType["WAGGLE"] = "waggle";
})(AnimationType = exports.AnimationType || (exports.AnimationType = {}));
var MapVectorLayerType;
(function (MapVectorLayerType) {
    MapVectorLayerType["CIRCLE"] = "Circle";
    MapVectorLayerType["CIRCLE_MARKER"] = "CircleMarker";
    MapVectorLayerType["POLYLINE"] = "Polyline";
    MapVectorLayerType["POLYGON"] = "Polygon";
    MapVectorLayerType["RECTANGLE"] = "Rectangle";
})(MapVectorLayerType = exports.MapVectorLayerType || (exports.MapVectorLayerType = {}));
var MapLayerTypes;
(function (MapLayerTypes) {
    MapLayerTypes["IMAGE_LAYER"] = "ImageOverlay";
    MapLayerTypes["TILE_LAYER"] = "TileLayer";
    MapLayerTypes["VECTOR_LAYER"] = "VectorLayer";
    MapLayerTypes["VIDEO_LAYER"] = "VideoOverlay";
    MapLayerTypes["WMS_TILE_LAYER"] = "WMSTileLayer";
})(MapLayerTypes = exports.MapLayerTypes || (exports.MapLayerTypes = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJlY29tcGlsZS9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLG9CQU9YO0FBUEQsV0FBWSxvQkFBb0I7SUFDOUIsdUVBQStDLENBQUE7SUFDL0MsdUZBQStELENBQUE7SUFDL0QsbUZBQTJELENBQUE7SUFDM0QscUZBQTZELENBQUE7SUFDN0QsMkZBQW1FLENBQUE7SUFDbkUsdUZBQStELENBQUE7QUFDakUsQ0FBQyxFQVBXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBTy9CO0FBRUQsSUFBWSxRQWFYO0FBYkQsV0FBWSxRQUFRO0lBQ2xCLHFDQUF5QixDQUFBO0lBQ3pCLHlDQUE2QixDQUFBO0lBQzdCLDhCQUFrQixDQUFBO0lBQ2xCLGtDQUFzQixDQUFBO0lBQ3RCLGtDQUFzQixDQUFBO0lBQ3RCLHlDQUE2QixDQUFBO0lBQzdCLHFDQUF5QixDQUFBO0lBQ3pCLHdEQUE0QyxDQUFBO0lBQzVDLHlDQUE2QixDQUFBO0lBQzdCLDhCQUFrQixDQUFBO0lBQ2xCLDJDQUErQixDQUFBO0lBQy9CLHdEQUE0QyxDQUFBO0FBQzlDLENBQUMsRUFiVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQWFuQjtBQUVELElBQVksYUFPWDtBQVBELFdBQVksYUFBYTtJQUN2QixrQ0FBaUIsQ0FBQTtJQUNqQiw4QkFBYSxDQUFBO0lBQ2IsZ0NBQWUsQ0FBQTtJQUNmLDhCQUFhLENBQUE7SUFDYiw4QkFBYSxDQUFBO0lBQ2Isa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVBXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBT3hCO0FBc0RELElBQVksa0JBTVg7QUFORCxXQUFZLGtCQUFrQjtJQUM1Qix1Q0FBaUIsQ0FBQTtJQUNqQixvREFBOEIsQ0FBQTtJQUM5QiwyQ0FBcUIsQ0FBQTtJQUNyQix5Q0FBbUIsQ0FBQTtJQUNuQiw2Q0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBTlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFNN0I7QUFZRCxJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDdkIsNkNBQTRCLENBQUE7SUFDNUIseUNBQXdCLENBQUE7SUFDeEIsNkNBQTRCLENBQUE7SUFDNUIsNkNBQTRCLENBQUE7SUFDNUIsZ0RBQStCLENBQUE7QUFDakMsQ0FBQyxFQU5XLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBTXhCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTWFwQ29tcG9uZW50TWVzc2FnZXMge1xyXG4gIE1BUF9DT01QT05FTlRfTU9VTlRFRCA9ICdNQVBfQ09NUE9ORU5UX01PVU5URUQnLFxyXG4gIERPQ1VNRU5UX0VWRU5UX0xJU1RFTkVSX0FEREVEID0gJ0RPQ1VNRU5UX0VWRU5UX0xJU1RFTkVSX0FEREVEJyxcclxuICBXSU5ET1dfRVZFTlRfTElTVEVORVJfQURERUQgPSAnV0lORE9XX0VWRU5UX0xJU1RFTkVSX0FEREVEJyxcclxuICBVTkFCTEVfVE9fQUREX0VWRU5UX0xJU1RFTkVSID0gJ1VOQUJMRV9UT19BRERfRVZFTlRfTElTVEVORVInLFxyXG4gIERPQ1VNRU5UX0VWRU5UX0xJU1RFTkVSX1JFTU9WRUQgPSAnRE9DVU1FTlRfRVZFTlRfTElTVEVORVJfUkVNT1ZFRCcsXHJcbiAgV0lORE9XX0VWRU5UX0xJU1RFTkVSX1JFTU9WRUQgPSAnV0lORE9XX0VWRU5UX0xJU1RFTkVSX1JFTU9WRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hcEV2ZW50IHtcclxuICBPTl9NT1ZFX0VORCA9ICdvbk1vdmVFbmQnLFxyXG4gIE9OX01PVkVfU1RBUlQgPSAnb25Nb3ZlU3RhcnQnLFxyXG4gIE9OX01PVkUgPSAnb25Nb3ZlJyxcclxuICBPTl9SRVNJWkUgPSAnb25SZXNpemUnLFxyXG4gIE9OX1VOTE9BRCA9ICdvblVubG9hZCcsXHJcbiAgT05fVklFV19SRVNFVCA9ICdvblZpZXdSZXNldCcsXHJcbiAgT05fWk9PTV9FTkQgPSAnb25ab29tRW5kJyxcclxuICBPTl9aT09NX0xFVkVMU19DSEFOR0UgPSAnb25ab29tTGV2ZWxzQ2hhbmdlJyxcclxuICBPTl9aT09NX1NUQVJUID0gJ29uWm9vbVN0YXJ0JyxcclxuICBPTl9aT09NID0gJ29uWm9vbScsXHJcbiAgT05fTUFQX0NMSUNLRUQgPSAnb25NYXBDbGlja2VkJyxcclxuICBPTl9NQVBfTUFSS0VSX0NMSUNLRUQgPSAnb25NYXBNYXJrZXJDbGlja2VkJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbmltYXRpb25UeXBlIHtcclxuICBCT1VOQ0UgPSAnYm91bmNlJyxcclxuICBGQURFID0gJ2ZhZGUnLFxyXG4gIFBVTFNFID0gJ3B1bHNlJyxcclxuICBKVU1QID0gJ2p1bXAnLFxyXG4gIFNQSU4gPSAnc3BpbicsXHJcbiAgV0FHR0xFID0gJ3dhZ2dsZSdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBNYXJrZXJBbmltYXRpb24ge1xyXG4gIHR5cGU6IEFuaW1hdGlvblR5cGU7XHJcbiAgZHVyYXRpb24/OiBudW1iZXI7XHJcbiAgZGVsYXk/OiBudW1iZXI7XHJcbiAgZGlyZWN0aW9uPzogJ25vbWFsJyB8ICdyZXZlcnNlJyB8ICdhbHRlcm5hdGUnIHwgJ2FsdGVybmF0ZS1yZXZlcnNlJztcclxuICBpdGVyYXRpb25Db3VudD86IG51bWJlciB8ICdpbmZpbml0ZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwTWFya2VyIHtcclxuICBhbmltYXRpb24/OiBNYXBNYXJrZXJBbmltYXRpb247XHJcbiAgY29vcmRzOiBXZWJWaWV3TGVhZmxldExhdExuZztcclxuICBkaXZJY29uPzogTC5EaXZJY29uO1xyXG4gIGljb246IGFueTtcclxuICBpY29uQW5jaG9yPzogW251bWJlciwgbnVtYmVyXTtcclxuICBpZD86IG51bWJlciB8IHN0cmluZztcclxuICBzaXplPzogW251bWJlciwgbnVtYmVyXTtcclxuICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBMYXllciB7XHJcbiAgaWQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgaXNCYXNlTGF5ZXI/OiBib29sZWFuO1xyXG4gIGlzQ2hlY2tlZD86IGJvb2xlYW47IC8vIGlmIHRoZSBsYXllciBpcyBzZWxlY3RlZCBpbiB0aGUgbGF5ZXIgc2VsZWN0aW9uIGNvbnRyb2xcclxuICBuYW1lPzogc3RyaW5nOyAvLyB0aGUgbmFtZSBvZiB0aGUgbGF5ZXIsIHRoaXMgd2lsbCBiZSBzZWVuIGluIHRoZSBsYXllciBzZWxlY3Rpb24gY29udHJvbFxyXG4gIG9wYWNpdHk/OiBudW1iZXI7XHJcbiAgdHlwZT86IE1hcExheWVyVHlwZXMgfCBNYXBWZWN0b3JMYXllclR5cGU7IC8vIHRoZSB0eXBlIG9mIGxheWVyIGFzIHNob3duIGF0IGh0dHBzOi8vcmVhY3QtbGVhZmxldC5qcy5vcmcvZG9jcy9lbi9jb21wb25lbnRzLmh0bWwjcmFzdGVyLWxheWVyc1xyXG4gIHpJbmRleD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBWZWN0b3JMYXllciBleHRlbmRzIE1hcExheWVyIHtcclxuICBhdHRyaWJ1dGlvbj86IHN0cmluZztcclxuICBjb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBWZWN0b3JMYXllckNpcmNsZSBleHRlbmRzIE1hcFZlY3RvckxheWVyIHtcclxuICBjZW50ZXI6IFdlYlZpZXdMZWFmbGV0TGF0TG5nO1xyXG4gIHJhZGl1czogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwVmVjdG9yTGF5ZXJDaXJjbGVNYXJrZXIgZXh0ZW5kcyBNYXBWZWN0b3JMYXllciB7XHJcbiAgY2VudGVyOiBXZWJWaWV3TGVhZmxldExhdExuZztcclxuICByYWRpdXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcFZlY3RvckxheWVyUG9seWxpbmUgZXh0ZW5kcyBNYXBWZWN0b3JMYXllciB7XHJcbiAgcG9zaXRpb25zOiBXZWJWaWV3TGVhZmxldExhdExuZ1tdIHwgV2ViVmlld0xlYWZsZXRMYXRMbmdbXVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwVmVjdG9yTGF5ZXJQb2x5Z29uIGV4dGVuZHMgTWFwVmVjdG9yTGF5ZXIge1xyXG4gIHBvc2l0aW9uczogV2ViVmlld0xlYWZsZXRMYXRMbmdbXSB8IFdlYlZpZXdMZWFmbGV0TGF0TG5nW11bXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcFZlY3RvckxheWVyUmVjdGFuZ2xlIGV4dGVuZHMgTWFwVmVjdG9yTGF5ZXIge1xyXG4gIGJvdW5kczogV2ViVmlld0xlYWZsZXRMYXRMbmdCb3VuZHM7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hcFZlY3RvckxheWVyVHlwZSB7XHJcbiAgQ0lSQ0xFID0gJ0NpcmNsZScsXHJcbiAgQ0lSQ0xFX01BUktFUiA9ICdDaXJjbGVNYXJrZXInLFxyXG4gIFBPTFlMSU5FID0gJ1BvbHlsaW5lJyxcclxuICBQT0xZR09OID0gJ1BvbHlnb24nLFxyXG4gIFJFQ1RBTkdMRSA9ICdSZWN0YW5nbGUnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwUmFzdGVyTGF5ZXIgZXh0ZW5kcyBNYXBMYXllciB7XHJcbiAgLy8gYXR0cmlidXRpb24gc3RyaW5nIHRvIGJlIHNob3duIGZvciB0aGlzIGxheWVyXHJcbiAgYXR0cmlidXRpb24/OiBzdHJpbmc7IC8vJyZhbXA7Y29weSA8YSBocmVmPSZxdW90O2h0dHA6Ly9vc20ub3JnL2NvcHlyaWdodCZxdW90Oz5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXHJcbiAgYm91bmRzPzogV2ViVmlld0xlYWZsZXRMYXRMbmdCb3VuZHM7XHJcbiAgbGF5ZXJzPzogTWFwTGF5ZXJbXSB8IHN0cmluZztcclxuICBwbGF5PzogYm9vbGVhbjtcclxuICAvLyB1cmwgb2YgdGlsZXNcclxuICB1cmw/OiBzdHJpbmc7IC8vYGh0dHBzOi8vYXBpLnRpbGVzLm1hcGJveC5jb20vdjQvbWFwYm94LnN0cmVldHMve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj0ke21hcGJveFRva2VufWAsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hcExheWVyVHlwZXMge1xyXG4gIElNQUdFX0xBWUVSID0gJ0ltYWdlT3ZlcmxheScsXHJcbiAgVElMRV9MQVlFUiA9ICdUaWxlTGF5ZXInLFxyXG4gIFZFQ1RPUl9MQVlFUiA9ICdWZWN0b3JMYXllcicsXHJcbiAgVklERU9fTEFZRVIgPSAnVmlkZW9PdmVybGF5JyxcclxuICBXTVNfVElMRV9MQVlFUiA9ICdXTVNUaWxlTGF5ZXInXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwU3RhcnR1cE1lc3NhZ2Uge1xyXG4gIHJhc3RlckxheWVycz86IE1hcFJhc3RlckxheWVyW107XHJcbiAgdmVjdG9yTGF5ZXJzPzogTWFwVmVjdG9yTGF5ZXJbXTtcclxuICBtYXBNYXJrZXJzPzogTWFwTWFya2VyW107XHJcbiAgbWFwQ2VudGVyQ29vcmRzPzogV2ViVmlld0xlYWZsZXRMYXRMbmc7XHJcbiAgem9vbT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWJWaWV3TGVhZmxldExhdExuZyB7XHJcbiAgbGF0OiBudW1iZXI7XHJcbiAgbG5nOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgV2ViVmlld0xlYWZsZXRMYXRMbmdCb3VuZHMgPVxyXG4gIHwgV2ViVmlld0xlYWZsZXRMYXRMbmdCb3VuZHNDb3JuZXJzXHJcbiAgfCBXZWJWaWV3TGVhZmxldExhdExuZ1tdO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWJ2aWV3TGVhZmxldE1lc3NhZ2Uge1xyXG4gIGV2ZW50PzogYW55O1xyXG4gIG1zZz86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxuICBwYXlsb2FkPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYlZpZXdMZWFmbGV0TGF0TG5nQm91bmRzQ29ybmVycyB7XHJcbiAgc291dGhXZXN0OiBXZWJWaWV3TGVhZmxldExhdExuZztcclxuICBub3J0aEVhc3Q6IFdlYlZpZXdMZWFmbGV0TGF0TG5nO1xyXG59XHJcbiJdfQ==