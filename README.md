# experiment-di-testing
Experimenting with DI with nested aurelian components and with non aurelian classes

#### Experiment Results

###### Nested DI
DI does *not* nest. Injecting a class into a lower-level view/view-model does not give access to it at all nested view-model levels. Inject at every level.

###### DI on non-singleton classes
DI *does* work on non-singleton classes. It appears that injecting a non-singleton class is similar to creating a new instance of that class.
