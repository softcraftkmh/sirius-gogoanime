# Sirius Gogoanime

Sirius Gogoanime is a website built using React 18 with Next.js 13 beta. It provides a platform to search and filter anime lists, view anime details, and more.

## Code Styling

The code follows the principles of clean code and DRY. The eslint is based upon the air-bnb style guide, with additional linter rules added. Type is preferred over interface, and union type is preferred over enum.

## How to Run the Application

PNPM is used for efficiency. To install the packages, run `pnpm i`. To start the development, run `pnpm dev`.

## Folders

- `app` contains server components and layouts.
  - `pages` contains server pages.
- `design-system` contains UI building elements and blocks.
  - `base` contains base UI elements.
  - `components` composes based on base design elements for complex components.
- `modules` contains home modules and anime details modules.
- `services` contains API calls.
- `types` contains types that are used in the project.

## Architecture

The website is modules based, with data fetching mainly done in the server to improve performance. React server components are used to reduce bundle size and loading time. Caching for API calls is done in the server.

## CSS

Tailwind is used as the CSS framework for its simplicity and ease of use. Tailwind animation is also used, and grid is mainly used for the layouts.

## Test Cases

Test cases are added for the base design components, with more to be added later.

## Scalability of the Code-base

Modules are used for the scalability of the code base. The design system is separated to be highly reusable. React server components, caching, and deduping are used to reduce the server workload and increase performance.

## State Management

Only local state management is used, with global state management to be used as required. Rematch js will be used for its simplicity.

## Features

The website currently provides the following features:

- Anime lists (search, filter)
- Anime details
- OG tags are added for social media friendly (needs to be improved for the anime details)

## Feature Roadmap

The following features are planned for future development:

- SEO improvement
- Dark theme
- Anime schedule
- Choose Anilist GraphQL API
- Push notifications

## Contributing

If you'd like to contribute, please fork the repository and create a pull request. Please ensure that your code passes the existing tests and that new features or changes include tests as well.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
