using System;
using System.Collections.Generic;
using System.Data;
/*
 * Instructions:
 * ctrl+F5 to run exe  so you can C&P results (list)
 * Input list into userscript
 * Crack results 
 * 
 * There is something commented out, that if you remove the comments, 
 *    will limit the list from ~300 results to 7
 *    
  _    _ ______    _____                                             _    _             _   
 | |  | |  ____|  / ____|                                           | |  | |           | |  
 | |__| | |__    | (___   ___ __ ___   _____ _ __   __ _  ___ _ __  | |__| |_   _ _ __ | |_ 
 |  __  |  __|    \___ \ / __/ _` \ \ / / _ \ '_ \ / _` |/ _ \ '__| |  __  | | | | '_ \| __|
 | |  | | |       ____) | (_| (_| |\ V /  __/ | | | (_| |  __/ |    | |  | | |_| | | | | |_ 
 |_|  |_|_|      |_____/ \___\__,_| \_/ \___|_| |_|\__, |\___|_|    |_|  |_|\__,_|_| |_|\__|
                                                    __/ |                                   
                                                   |___/                                    
                                   _____ _               _____ 
                                  / ____| |             | ____|
                                 | (___ | |_ ___ _ __   | |__  
                                  \___ \| __/ _ \ '_ \  |___ \ 
                                  ____) | ||  __/ |_) |  ___) |
                                 |_____/ \__\___| .__/  |____/ 
                                                | |            
                                                |_|            
    
               
 *    
 *    Happy Hacking!
    */

namespace Xerotics_Algebra_Puzzle
{
    class Program
    {
        static void Main(string[] args)
        {
            //var program = new Program();
            string username = "Omniscient";
            int[] usernameVal = { 15, 13, 14, 9, 19, 3, 9, 5, 14, 20 };
            int resultCount = 0;
            // Final List
            var resultList = new List<double>();

            // O-m
            for (int a = 1; a < 5; a++)
            {
                // m-n
                for (int b = 1; b < 5; b++)
                {
                    // n-i
                    for (int c = 1; c < 5; c++)
                    {
                        // i-s
                        for (int d = 1; d < 5; d++)
                        {
                            // s-c
                            for (int e = 1; e < 5; e++)
                            {
                                // c-i
                                for (int f = 1; f < 5; f++)
                                {
                                    // i-e
                                    for (int g = 1; g < 5; g++)
                                    {
                                        // e-n
                                        for (int h = 1; h < 5; h++)
                                        {
                                            // n-t
                                            for (int i = 1; i < 5; i++)
                                            {
                                                /*
                                                if (a == 3 && b == 2 && c == 1 && e == 4 && i == 3)
                                                {
                                                */
                                                    // Concat Equation String
                                                    string EquationStr =
                                                        usernameVal[0] + getOperator(a) +
                                                        usernameVal[1] + getOperator(b) +
                                                        usernameVal[2] + getOperator(c) +
                                                        usernameVal[3] + getOperator(d) +
                                                        usernameVal[4] + getOperator(e) +
                                                        usernameVal[5] + getOperator(f) +
                                                        usernameVal[6] + getOperator(g) +
                                                        usernameVal[7] + getOperator(h) +
                                                        usernameVal[8] + getOperator(i) +
                                                        usernameVal[9];
                                                    // Check for number of operators (limit options greatly!)
                                                    int plusCount = EquationStr.Split('+').Length - 1;
                                                    int minusCount = EquationStr.Split('-').Length - 1;
                                                    int multCount = EquationStr.Split('*').Length - 1;
                                                    int divCount = EquationStr.Split('/').Length - 1;
                                                    if (plusCount == 2 && minusCount == 2 && multCount == 4 && divCount == 1)
                                                    {
                                                        // Evaluate Equation String
                                                        var tempVal = Evaluate(EquationStr);
                                                        // If Whole Number
                                                        if ((tempVal % 1) == 0 && tempVal >= 0)
                                                        {
                                                            resultCount++;
                                                            // Fancy output
                                                            // Ban Hammer: 33279
                                                            // Judge Dredd: 4066
                                                            var tempVal2 = tempVal * 33279 * 4066;
                                                            // Add val to list
                                                            bool alreadyExist = resultList.Contains(tempVal2);
                                                            if (!alreadyExist)
                                                            {
                                                                resultList.Add(tempVal2);
                                                            }
                                                        }
                                                    //}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (int i = 1; i < resultList.Count; i++)
            {
                // Numbered list
                //Console.WriteLine(i+": "+ resultList[i]);
                // CSV List
                Console.Write(resultList[i] + ",");
            }
            Console.ReadKey();
        }

        public static string getOperator(int op)
        {
            // OP = 1-4
            string operatorStr = "";
            switch (op)
            {
                case 1:
                    //statements 
                    operatorStr = "+";
                    break;
                case 2:
                    //statements 
                    operatorStr = "-";
                    break;
                case 3:
                    //statements 
                    operatorStr = "*";
                    break;
                case 4:
                    //statements 
                    operatorStr = "/";
                    break;
            }
            return operatorStr;
        }

        public static double Evaluate(string expression)
        {
            DataTable table = new DataTable();
            table.Columns.Add("expression", typeof(string), expression);
            DataRow row = table.NewRow();
            table.Rows.Add(row);
            return double.Parse((string)row["expression"]);
        }
    }
}
