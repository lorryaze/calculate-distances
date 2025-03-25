# Calculate distances API

To run the project locally you can run a `docker-compose up` on the root of the project.

### Backend

To run just the backend you need to run the following commands, running on port 8000:

`
cd backend
make build
make run
make logs (too see application logs)
`

### Frontend

To run just the frontend yoy should run the following commands, running on port 3000:

`
cd frontend
npm install
npm start
`

## Questions

Case

Delivery apps have boomed during this pandemic and we have a new client that don't want
to be left behind in this trend and we plan to launch our own delivery company. For this, we
have decided to start with a working prototype, put it to the test for a few months to see if it
manages to gain traction and finally, if the test is successful, go all the way to production.

The functional prototype, although, it will be basic, must allow customers to place orders
and delivery people to do their work.
All the necessary software for this will be developed by us and you will be the Software
Engineer in charge of leading the development team. Your team will initially be composed
of:
• A Dev designer: Frontend design and development specialist.
• An Impact Lead: In this case, you can consider that it is someone specialized in the
business and that will help you so that what you develop has a real impact.
• You, as Software Engineer and project leader.
• You will also have the support of a Data Scientist and a Machine Learning Engineer,
They will not participate in the entire process, but you can ask them for help on specific
issues.
Next, we would like you to answer a few questions to understand how you would approach
the development process. Don't worry if you feel the questions are too open-ended or there
isn't enough information to answer them. They are built precisely that way so that you can
make all the assumptions you deem appropriate.

 - 1. Tell us what pieces of software you think are necessary to develop for the working
prototype and how they are related. We call each application (web, mobile or desktop),
each API, each batch process that can be deployed independently a piece of software.
Support yourself with a diagram if you think necessary.

    - Mobile application: In this one you can enter as a customer or as a delivery driver
    - Web application (restaurant portal): For restaurantes manage orders. 
    - Order Service (API): Responsible to handle all the logic related to orders.
    - User Service (API): Responsible for handle user data, auths, profiles, restaurants. 
    - Push Notifications Service: Responsible for notificate orders updates
    - Payment service (API): Processess payments
    - Database

    Customer (mobile app) makes a order -> the user service validate the customer -> the order service create de order -> payment service process the payment and returns to order service -> order service save the order -> push notifications service notify the restaurant

    Portal receives a notification -> order service update the order -> notification service notify a driver

    Maybe we can use the ML in the Order service to find to find the nearest drivers, or to make suggestions based on a customer's requests.

2. Tell us about the type of architecture you chose for question (1). Monolithic?
Micro-services? Any intermediate? Other? Comment on what you based to make this
decision.
    Even though it's an MVP, I chose the microservices architecture thinking about scalability, maybe a monolith with well-defined domains (DDD), would also be an option, but then I would need to migrate to microservices.

3. Describe the work methodology you would use for development. It can be some
known methodology (Scrum, XP, RUP), an adaptation, or a mixture between several
methodologies. Whatever your experience has shown you works. Tell us why you think this
form is appropriate for our problem.
    Maybe a mix of scrum and kanban because some scrum rituals are valuable like refinement, planning, etc. I also like to work with sprints. The kanban part helps with organizing and visualizing the cards.

4. Describe the workflow you would use to collaborate using Git. As with (3), you can
use something familiar or an adaptation.
    feature-branch following the git flow.

5. Do you think it is necessary to add any extra member to the team during the
development of the prototype? What would your role be? Do you think it would be
necessary to add new members after the prototype phase? When and why?
    On the prototype phase maybe add a backend developer, and afte the prototype add a QA because is important make a couple of tests suites to grante quality, security, availability and other non functional requirements.

6. What other considerations would you have to make the development process robust
and efficient?
    Keep the code clean, organized and tested, a POC does not need to be poorly done as this code may evolve at some point. Isolate domains in case of a monolith, do unit tests, integrated tests, good logs, CI, good documentation.