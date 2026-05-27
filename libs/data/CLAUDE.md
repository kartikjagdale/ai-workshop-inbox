# libs/data — Data Layer

Models, mock data, and services for the inbox app.

## Conventions
- TypeScript interfaces for all models (not classes)
- Mock data in `.mock.ts` files co-located with models
- Services use `inject()` and `providedIn: 'root'`
- Use signals for state: `signal<T>()`, `computed(() => ...)`
- No HTTP calls — everything is mocked with static data
- Export all public API from `src/index.ts`

## Key Models
- Email (id, from, subject, preview, body, timestamp, read, labels, folder)
- Folder (id, name, icon, count)
- Label (id, name, color)
- Category (id, name, icon, count)
