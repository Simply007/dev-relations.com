# Notes

The notes about the template to reiterate on the improvements.

- Use the Get Started section with 3 steps to get started with the template => to have it running to main README
- Add section to allow i.e. configuration for public access to the Strapi API so that homepage works out of the box -> maybe even pre-set it that way (and describe it)
- Describe DB migration and how to do it - or the automatic setup and how to do it - what is under the hood
- how re the server mutations (i.e. register user) differs from the client queries (gimme pages) /mutations (update my name/subscribe me - maybe server as weel) -> how does the elevated write access works for auth
- Prefilled env files values (db password)
- how does the firstName and lastName work in combination of username on the Strapi part => I added username and firstName and lastName
- sometimes Strapi admin get stuck and does not respond to clicks -> full refresh fixes thiu
- Why the Czech is in the UI, nut not in the Strapi
- the user registration form should act based on confirmed flag -> since the email verification is turned off by default
