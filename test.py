import pandas as pd

demand = pd.read_csv("demand.csv")
demand1 = demand[(demand[" Demand"] > 800)]

print(demand1.head())