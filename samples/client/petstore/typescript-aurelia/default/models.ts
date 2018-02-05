/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Describes the result of uploading an image resource
 */
export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

/**
 * A category for a pet
 */
export interface Category {
  id?: number;
  name?: string;
}

/**
 * An order for a pets from the pet store
 */
export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: Date;
  /**
   * Order Status
   */
  status?: OrderStatusEnum;
  complete?: boolean;
}

/**
 * Enum for the status property.
 */
export type OrderStatusEnum = 'placed' | 'approved' | 'delivered';

/**
 * A pet for sale in the pet store
 */
export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  /**
   * pet status in the store
   */
  status?: PetStatusEnum;
}

/**
 * Enum for the status property.
 */
export type PetStatusEnum = 'available' | 'pending' | 'sold';

/**
 * A tag for a pet
 */
export interface Tag {
  id?: number;
  name?: string;
}

/**
 * A User who is purchasing from the pet store
 */
export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   */
  userStatus?: number;
}

