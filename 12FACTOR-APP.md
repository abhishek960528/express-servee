**The 12 Factor-APP**

#_In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:_

_Use declarative formats for setup automation, to minimize time and cost for new developers joining the project_
_Have a clean contract with the underlying operating system, offering maximum portability between execution environments_
_Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration_
_Minimize divergence between development and production, enabling continuous deployment for maximum agility_
_And can scale up without significant changes to tooling, architecture, or development practices._
_The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc)._

### The Twelwe Factors are:

# I. Codebase

_One codebase tracked in revision control, many deploys_

# II. Dependencies

_Explicitly declare and isolate dependencies_

# III. Config

_Store config in the environment_

# IV. Backing services

_Treat backing services as attached resources_

# V. Build, release, run

_Strictly separate build and run stages_

# VI. Processes

_Execute the app as one or more stateless processes_

# VII. Port binding

_Export services via port binding_

# VIII. Concurrency

_Scale out via the process model_

# IX. Disposability

_Maximize robustness with fast startup and graceful shutdown_

# X. Dev/prod parity

_Keep development, staging, and production as similar as possible_

# XI. Logs

_Treat logs as event streams_

# XII. Admin processes

_Run admin/management tasks as one-off processes_
