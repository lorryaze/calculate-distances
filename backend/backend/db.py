import sqlite3
import os

DATABASE = "queries.db"
DB_PATH = os.path.join(os.path.dirname(__file__), DATABASE) #smart code

def get_db():
    print(f"DB Path: {DB_PATH}")
    if not os.path.exists(os.path.dirname(DB_PATH)):
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    try:
        conn = sqlite3.connect(DB_PATH)
        print("Database connection established.")
        conn.row_factory = sqlite3.Row
        return conn
    except Exception as e:
        print(f"Error connecting to DB: {e}")
        return None

def init_db():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS distances (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            source_address TEXT,
            destination_address TEXT,
            distance REAL
        )
    ''')
    conn.commit()
    conn.close()
