import pandas as pd


def read_kepler_csv(file_path):
    # Read the CSV file
    df = pd.read_csv(file_path)
    return df
