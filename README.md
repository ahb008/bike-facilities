# bike-facilities

This project is an interactive map of Portland's bike facilities. Each kind of facility is categorized to be a different color on the map based on facility type. Clicking on a facility reveals more information about that particular facility via a pop up.

Stack: Vue, Typescript, Leaflet, SCSS

## Running locally

From the repo root, run:

    docker compose up --build

View at: http://localhost:8080.

<img width="1215" height="762" alt="Screenshot 2026-10-02 at 4 19 04 PM" src="https://github.com/user-attachments/assets/19985663-d636-43fd-a4e8-f6efe45d3ea5" />


Resources:
https://leafletjs.com/reference.html

https://vuejs.org/api/

Used to help render map: https://ssojet.com/data-structures/implement-map-in-nuxtjs#integrating-leafletjs-for-interactive-maps:~:text=A%20common%20pitfall%20is%20forgetting%20Leaflet%27s%20CSS%2C%20which%20leads%20to%20a%20blank%20map%20with%20unstyled%20elements.%20Also%2C%20always%20ensure%20your%20map%20initialization%20occurs%20within%20onMounted%20to%20guarantee%20the%20target%20DOM%20element%20is%20ready.%20This%20approach%20ensures%20a%20smooth%20user%20experience%20with%20functional%2C%20well%2Dpresented%20maps.

Containerizing a Vue app: https://docs.docker.com/guides/vuejs/

Useful for importing SCSS shared variables: https://stackoverflow.com/questions/35580710/using-sass-variables-in-a-vuejs-component & https://stackoverflow.com/questions/

*Note: AI (Claude Sonnet 5.5) was used for this project to define types/data objects, resolve typing related bugs, and syntax formatting (I typically use React for frontend). At no point was AI ever used within the IDE.