//
//  ViewController.swift
//  myApp
//
//  Created by uncoder on 2017/11/16.
//  Copyright © 2017年 uncoder. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func handleClick(_ sender: Any) {
        NSLog("Hello")
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        
        //        let filePath = Bundle.main.path(forResource: "main", ofType: "jsbundle")
        //        let jsCodeLocation = URL(fileURLWithPath: filePath!)
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "MyReactNativeApp",
            initialProperties: nil,
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }
    
}

