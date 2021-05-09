// const { jest } = require("@jest/globals")

jest.mock("express", () => {
  const app = {
    use: jest.fn(),
    get: jest.fn(),
    post: jest.fn(),
    delete: jest.fn(),
    listen: jest.fn(),
  }
  const express = jest.fn(() => app)
  express.json = jest.fn(() => "json")
  return express
})

const express = require("express")

require("../src/index.js")

describe("Actividad 1", () => {
  
  describe("application setup", () => {

    test("express application is created", () => {
      expect(express.mock.calls.length).toBe(1)
    })
    
    test("app uses json middleware to parse body", () => {
      expect(express().use.mock.calls.length).toBe(1)
      expect(express.json.mock.calls.length).toBe(1)
      expect(express().use.mock.calls[0][0]).toBe("json")
    })
    
    test("app listens on port 3333", () => {
      expect(express().listen.mock.calls.length).toBe(1)
      expect(express().listen.mock.calls[0][0]).toBe(3333)
    })
    
  })

  describe("routes", () => {
    
    describe("GET /articulos", () => {
          
      test("app has one GET route", () => {
        expect(express().get.mock.calls.length).toBe(1)
      })
      
      test("the route is named /articulos", () => {
        expect(express().get.mock.calls[0][0]).toBe("/articulos")
      })
      
      test("the route is defined with a callback function", () => {
        expect(express().get.mock.calls[0][1]).toEqual(expect.any(Function))
      })
  
      test("the route's callback returns an array of articulos", () => {
        const res = { 
          json: jest.fn(), 
          send: jest.fn() 
        }
        
        express().get.mock.calls[0][1](undefined, res)

        expect.assertions(1)

        if(res.send.mock.calls.length == 1) 
          expect(res.send.mock.calls[0][0]).toEqual([])
        
        if(res.json.mock.calls.length == 1)
          expect(res.json.mock.calls[0][0]).toEqual([])
      })
      
    })
    
  })
  
  
  
})