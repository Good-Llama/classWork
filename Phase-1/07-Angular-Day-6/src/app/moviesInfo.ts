/****************************************************************************
This is an interface

An interface is a user-defined data type

It describes a format of data that may be used in multiple places

Allows the sharing of a data format between components, services, etc.

Suppose the same object layout is required in 20 different places

You could code the object layout in each of those 20 places

    -or-

Put the object layout in an interface and every place uses the interface

Interfaces also make it easier to change the object layout: 

    a change to the interface is picked up by every placed it's used

    instead of having to change it in all those places
*****************************************************************************/
// This interface describes a MoviesInfo object
// We export it so others can use it 

export interface MoviesInfo {
    title : string;
    releaseYear : number;
    director : string;
}