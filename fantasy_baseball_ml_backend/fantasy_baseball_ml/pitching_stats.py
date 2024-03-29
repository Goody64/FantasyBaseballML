import pandas as pd
from pybaseball import playerid_lookup, statcast_pitcher

def calculate_pitching_stats(first_name, last_name, stat_type):
    player = playerid_lookup(last_name, first_name)
    player_id = player.iloc[0]['key_mlbam']
    first = int(player.iloc[0]['mlb_played_first'])
    last = int(player.iloc[0]['mlb_played_last'])
    player_stats = statcast_pitcher('2023-03-30', f'{last}-12-31', player_id)

    player_stats_cleaned = player_stats.where(pd.notnull(player_stats), None)
    mean_speeds = player_stats_cleaned.groupby(stat_type).release_speed.agg("mean")
    # Convert to dictionary
    return mean_speeds.to_dict()
    # return player_stats_cleaned.to_dict()
