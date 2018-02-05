//
// Pet.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct Pet: Codable {

    public enum Status: String, Codable { 
        case available = "available"
        case pending = "pending"
        case sold = "sold"
    }
    public var _id: Int64?
    public var _idNum: NSNumber? {
        get {
            return _id.map({ return NSNumber(value: $0) })
        }
    }
    public var category: Category?
    public var name: String
    public var photoUrls: [String]
    public var tags: [Tag]?
    /** pet status in the store */
    public var status: Status?


    public enum CodingKeys: String, CodingKey { 
        case _id = "id"
        case category
        case name
        case photoUrls
        case tags
        case status
    }


}

