## Notes

I've tried to cover as much as I could given the constraints and ambiguity of the task and as much as it made sense to me.
Feel free to give me some feedback if you want me to change/improve something.
Designs are only in the ballpark. In order to cover them properly I would need actual design files.
Carousel for mobile version of listing is missing. That is a big task in it of itself. I tried to find something suitable for this case, but couldn't. Making it from scratch is just too much.

Also, there are few possible places which could be further improved on: e.g. GroupItem and ElementItem look like they could be one, but I made them separate just to avoid digging a hole for myself later on. Also Element type currently has both hero banner, and product tag group merged. Probably it could diverge later on to each one of the possible elements.

## Running the development server

```bash
npm install
npm run dev
# or
yarn dev
```
