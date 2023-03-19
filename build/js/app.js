function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const i=document.createElement("picture");i.innerHTML=`\n        <source srcset="build/img/thumb/${n}.avif" type="image/avif">\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/thumb/${n}.jpg" alt="Imagen Galería">\n        `,i.onclick=function(){t(n)},e.appendChild(i)}function t(e){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="image/avif">\n        <source srcset="build/img/grande/${e}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="Imagen Galería">\n        `;const n=document.createElement("div");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()};const i=document.createElement("p");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()},n.appendChild(i);const c=document.querySelector("body");c.appendChild(n),c.classList.add("fijar-body")}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbmljaWFyQXBwIiwibmF2ZWdhY2lvbkZpamEiLCJjcmVhckdhbGVyaWEiLCJzY3JvbGxOYXYiLCJiYXJyYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNvYnJlRmVzdGl2YWwiLCJib2R5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZW5sYWNlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VjY2lvblNjcm9sbCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJocmVmIiwidmFsdWUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZ2FsZXJpYSIsImkiLCJpbWFnZW4iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwib25jbGljayIsIm1vc3RyYXJJbWFnZW4iLCJhcHBlbmRDaGlsZCIsImlkIiwib3ZlcmxheSIsImNlcnJhck1vZGFsIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQU1BLFNBQVNBLGFBRUxDLGlCQUNBQyxlQUNBQyxZQUdKLFNBQVNGLGlCQUVMLE1BQU1HLEVBQVFDLFNBQVNDLGNBQWMsV0FDL0JDLEVBQWdCRixTQUFTQyxjQUFjLG1CQUV2Q0UsRUFBT0gsU0FBU0MsY0FBYyxRQUVwQ0csT0FBT0MsaUJBQWlCLFVBQVUsV0FFM0JILEVBQWNJLHdCQUF3QkMsT0FBUyxHQUU5Q1IsRUFBTVMsVUFBVUMsSUFBSSxRQUVwQk4sRUFBS0ssVUFBVUMsSUFBSSxpQkFJbkJWLEVBQU1TLFVBQVVFLE9BQU8sUUFDdkJQLEVBQUtLLFVBQVVFLE9BQU8sbUJBTWxDLFNBQVNaLFlBR1dFLFNBQVNXLGlCQUFpQiwyQkFFbENDLFFBQVFDLElBR1JBLEVBQU9SLGlCQUFpQixTQUFTLFNBQVNTLEdBR3RDQSxFQUFFQyxpQkFHRixNQUFNQyxFQUFnQkYsRUFBRUcsT0FBT0MsV0FBV0MsS0FBS0MsTUFDL0JwQixTQUFTQyxjQUFjZSxHQUUvQkssZUFBZSxDQUFDQyxTQUFVLGdCQUtsRCxTQUFTekIsZUFFTCxNQUFNMEIsRUFBVXZCLFNBQVNDLGNBQWMscUJBRXZDLElBQUksSUFBSXVCLEVBQUksRUFBR0EsR0FBRyxHQUFJQSxJQUN0QixDQUNJLE1BQU1DLEVBQVN6QixTQUFTMEIsY0FBYyxXQUN0Q0QsRUFBT0UsVUFDUCw2Q0FDa0NILHVFQUNBQSx5R0FDa0NBLHlDQUdwRUMsRUFBT0csUUFBVSxXQUViQyxFQUFjTCxJQUdsQkQsRUFBUU8sWUFBWUwsR0FHeEIsU0FBU0ksRUFBY0UsR0FFbkIsTUFBTU4sRUFBU3pCLFNBQVMwQixjQUFjLFdBQ3RDRCxFQUFPRSxVQUNQLDhDQUNtQ0ksd0VBQ0FBLDBHQUNrQ0EseUNBR3JFLE1BQU1DLEVBQVVoQyxTQUFTMEIsY0FBYyxPQUN2Q00sRUFBUUYsWUFBWUwsR0FDcEJPLEVBQVF4QixVQUFVQyxJQUFJLFdBRXRCdUIsRUFBUUosUUFBVSxXQUVENUIsU0FBU0MsY0FBYyxRQUMvQk8sVUFBVUUsT0FBTyxjQUN0QnNCLEVBQVF0QixVQUlaLE1BQU11QixFQUFjakMsU0FBUzBCLGNBQWMsS0FDM0NPLEVBQVlDLFlBQWMsSUFDMUJELEVBQVl6QixVQUFVQyxJQUFJLGNBRTFCd0IsRUFBWUwsUUFBVSxXQUVMNUIsU0FBU0MsY0FBYyxRQUMvQk8sVUFBVUUsT0FBTyxjQUN0QnNCLEVBQVF0QixVQUdac0IsRUFBUUYsWUFBWUcsR0FFcEIsTUFBTTlCLEVBQU9ILFNBQVNDLGNBQWMsUUFDcENFLEVBQUsyQixZQUFZRSxHQUNqQjdCLEVBQUtLLFVBQVVDLElBQUksZUFySDNCVCxTQUFTSyxpQkFBaUIsb0JBQW9CLFdBRTFDViIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0VzY3VjaGEgY2FtYmlvcyBlbiBmdW5jacOzblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpXHJcbntcclxuICAgIGluaWNpYXJBcHAoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbmljaWFyQXBwKClcclxue1xyXG4gICAgbmF2ZWdhY2lvbkZpamEoKTtcclxuICAgIGNyZWFyR2FsZXJpYSgpO1xyXG4gICAgc2Nyb2xsTmF2KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdmVnYWNpb25GaWphKClcclxue1xyXG4gICAgY29uc3QgYmFycmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGNvbnN0IHNvYnJlRmVzdGl2YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvYnJlLWZlc3RpdmFsXCIpO1xyXG4gICAgLy9TZWxlY2Npb25hciB0b2RvIGVsIGJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoc29icmVGZXN0aXZhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFycmEuY2xhc3NMaXN0LmFkZChcImZpam9cIik7XHJcbiAgICAgICAgICAgIC8vQcOxYWRpciBjbGFzZSBwYXJhIHF1ZSBlbCBoZWFkZXIgbm8gaGFnYSB1biBzYWx0byBkZSBsw61uZWEgYnJ1c2NvXHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHktc2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXJyYS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlqb1wiKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1zY3JvbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vRnVuY2nDs24gcGFyYSBzY3JvbGwgYWwgdG9jYXIgZW5sYWNlc1xyXG5mdW5jdGlvbiBzY3JvbGxOYXYoKVxyXG57XHJcbiAgICAvL1NlbGVjY2lvbmFyIGVsZW1lbnRvIGVubGFjZVxyXG4gICAgY29uc3QgZW5sYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2ZWdhY2lvbi1wcmluY2lwYWwgYVwiKTtcclxuICAgIC8vUGFyYSBjYWRhIGVubGFjZS4uLlxyXG4gICAgZW5sYWNlcy5mb3JFYWNoKGVubGFjZT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL0xpc3RlbmVyIGEgY2xpY2sgZW4gZW5sYWNlXHJcbiAgICAgICAgICAgIGVubGFjZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9FbGltaW5hciBtb3ZpbWllbnRvIHByZWRldGVybWluYWRvXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9BcHVudGFyIGEgc2VjY2nDs24gcHVsc2FkYVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjY2lvblNjcm9sbCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXMuaHJlZi52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY2Npb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY2Npb25TY3JvbGwpO1xyXG4gICAgICAgICAgICAgICAgLy8vU2Nyb2xsIGhhY2lhIHNlY2Npw7NuIGNvbiBjb21wb3J0YW1pZW50byBzdWF2ZVxyXG4gICAgICAgICAgICAgICAgc2VjY2lvbi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWFyR2FsZXJpYSgpXHJcbntcclxuICAgIGNvbnN0IGdhbGVyaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGVyaWEtaW1hZ2VuZXNcIik7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMTsgaTw9MTI7IGkrKylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGljdHVyZVwiKTtcclxuICAgICAgICBpbWFnZW4uaW5uZXJIVE1MID0gXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwiYnVpbGQvaW1nL3RodW1iLyR7aX0uYXZpZlwiIHR5cGU9XCJpbWFnZS9hdmlmXCI+XHJcbiAgICAgICAgPHNvdXJjZSBzcmNzZXQ9XCJidWlsZC9pbWcvdGh1bWIvJHtpfS53ZWJwXCIgdHlwZT1cImltYWdlL3dlYnBcIj5cclxuICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzMDBcIiBzcmM9XCJidWlsZC9pbWcvdGh1bWIvJHtpfS5qcGdcIiBhbHQ9XCJJbWFnZW4gR2FsZXLDrWFcIj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltYWdlbi5vbmNsaWNrID0gZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW9zdHJhckltYWdlbihpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdhbGVyaWEuYXBwZW5kQ2hpbGQoaW1hZ2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3N0cmFySW1hZ2VuKGlkKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwaWN0dXJlXCIpO1xyXG4gICAgICAgIGltYWdlbi5pbm5lckhUTUwgPSBcclxuICAgICAgICBgXHJcbiAgICAgICAgPHNvdXJjZSBzcmNzZXQ9XCJidWlsZC9pbWcvZ3JhbmRlLyR7aWR9LmF2aWZcIiB0eXBlPVwiaW1hZ2UvYXZpZlwiPlxyXG4gICAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwiYnVpbGQvaW1nL2dyYW5kZS8ke2lkfS53ZWJwXCIgdHlwZT1cImltYWdlL3dlYnBcIj5cclxuICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzMDBcIiBzcmM9XCJidWlsZC9pbWcvZ3JhbmRlLyR7aWR9LmpwZ1wiIGFsdD1cIkltYWdlbiBHYWxlcsOtYVwiPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoaW1hZ2VuKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xyXG4gICAgICAgIC8vRWxpbWluYXIgb3ZlcmxheSBcclxuICAgICAgICBvdmVybGF5Lm9uY2xpY2sgPSBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpamFyLWJvZHlcIik7XHJcbiAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NyZWFyIGJvdMOzbiBwYXJhIGNlcnJhciBpbWFnZW5cclxuICAgICAgICBjb25zdCBjZXJyYXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNlcnJhck1vZGFsLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICAgICAgY2VycmFyTW9kYWwuY2xhc3NMaXN0LmFkZChcImJ0bi1jZXJyYXJcIik7XHJcbiAgICAgICAgLy9FbGltaW5hciBvdmVybGF5XHJcbiAgICAgICAgY2VycmFyTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlqYXItYm9keVwiKTtcclxuICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9Bw7FhZGlyIGJvdG9uIGEgZWxlbWVudG8gb3ZlcmxheVxyXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY2VycmFyTW9kYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJmaWphci1ib2R5XCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==