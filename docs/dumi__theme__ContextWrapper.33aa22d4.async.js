"use strict";(self.webpackChunktechui=self.webpackChunktechui||[]).push([[3458],{61464:function(a,d,c){c.r(d),c.d(d,{default:function(){return Y}});var D=c(5574),h=c.n(D),A=c(62435),t=c(63840),g=c(74865),o=c.n(g),l=c(64236),i=c(59474),O=c(90482),R=c(86074),S={};function Y(){var w=(0,t.pC)(),L=(0,A.useState)(!0),n=h()(L,2),v=n[0],e=n[1],u=(0,A.useRef)(t.m8.location.pathname);return(0,A.useEffect)(function(){return t.m8.listen(function(I){I.location.pathname!==u.current&&(u.current=I.location.pathname,e(!0),o().start(),document.documentElement.scrollTo(0,0))})},[]),(0,R.jsx)(l.D.Provider,{value:{pkg:{name:"techui",description:"techUI document",version:"0.0.1",license:"MIT",authors:["ayin86@163.com"]},historyType:"browser",entryExports:S,demos:i.DE,components:i.wx,locales:O.k,loading:v,setLoading:e,hostname:void 0,themeConfig:{footer:"Copyright \xA9 2022 aYin86cn",prefersColor:{default:"auto",switch:!0},nprogress:!0,hd:{rules:[]},rtl:!0,name:"TechUI",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAYAAAAbWs+BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF ymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0w TXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRh LyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEv MjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5v cmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0 PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09 Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMu YWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8v cHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRv YmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAy NC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDItMDJUMTc6NDk6MTcrMDg6MDAi IHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDItMDJUMTc6NDk6MTcrMDg6MDAiIHhtcDpNb2RpZnlE YXRlPSIyMDIzLTAyLTAyVDE3OjQ5OjE3KzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlk OjUxNGIwMTkwLTUxYTYtYTU0OC04YTk1LTBlY2UxYTU3NTk3YyIgeG1wTU06RG9jdW1lbnRJRD0i YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjI3MGUxODQyLTg2Y2MtOTM0Ny1iZDNlLTkzYWMzZjI2Zjk3 YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmYyMmY2NTEwLWMzY2YtNzQ0ZC05 MDU0LTQzY2M4Y2JhNWQ3ZiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1v ZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJj cmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYyMmY2NTEwLWMzY2YtNzQ0ZC05MDU0 LTQzY2M4Y2JhNWQ3ZiIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0wMlQxNzo0OToxNyswODowMCIgc3RF dnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIi8+IDxyZGY6 bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTRiMDE5 MC01MWE2LWE1NDgtOGE5NS0wZWNlMWE1NzU5N2MiIHN0RXZ0OndoZW49IjIwMjMtMDItMDJUMTc6 NDk6MTcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChX aW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4g PC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9 InIiPz4LuYoDAAAWlElEQVR4nO3dabwcVZnH8V+FhH0JSEpRYLQVUEIMYAGKCMMiTimUjlFbaGWV 1RhZBUEhIqsQCBACsk0EW2gHXFrGmkFEFAE1zSaCKEOjoAQL0ACSACapeXGSIR9Mbt/b91Q9p54+ 35fk3qr/DfdJV5166jlBnuesSBAEK/zvngVJdjlwiHQMi26lHe4uHcIVK6spgDEl5vBedSLwtHQI i3YjyRrSIarAF5yEdvhX4HjpGJadT5KtJx3Cdb7g5FwD/FQ6hEUhcKZ0CNcF/h5OUJJtCdwHjBNO YksO7EA7nCsdRJK/h3NVO3wIOE86hkUBcBlJtop0EFf5gpN3OvAH6RAWbQscKR3CVf6S0gVJthfw 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",socialLinks:{github:"https://github.com/ayin86/techui"}},_2_level_nav_available:!1},children:w})}}}]);
