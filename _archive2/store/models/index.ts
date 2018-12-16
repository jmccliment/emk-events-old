export interface IEventType {
  id: string;
  name: string;
  imageUrl: string;
}

export interface IEventTemplate {
  id: string;
  eventTypeId: string;
  sections: ISectionTemplate[]
}

export interface ISectionTemplate {
  id: string;
  name: string;
  description: string;
}

export interface IEvent {
  id?: string;
  name: string;
  locationName: string;
  start?: Date;
  end?: Date;
  eventTypeId: string;
}

export interface ISection {
  id: string;
  name: string;
  start: Date;
  end: Date;
  description: string;
}