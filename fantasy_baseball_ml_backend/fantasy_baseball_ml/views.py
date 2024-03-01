# views.py in your Django app

import pandas as pd
from django.http import JsonResponse
from pybaseball import playerid_lookup, statcast_pitcher

def player_stats(request):
    player_name = request.GET.get('player_name')
    first_name, last_name = player_name.split(' ')
    
    player = playerid_lookup(last_name, first_name)
    player_id = player.iloc[0]['key_mlbam']
    first = int(player.iloc[0]['mlb_played_first'])
    last = int(player.iloc[0]['mlb_played_last'])
    player_stats = statcast_pitcher('2023'+'-03-30', str(last)+'-12-31', player_id)

    player_stats_cleaned = player_stats.where(pd.notnull(player_stats), None)
    mean_speeds = player_stats_cleaned.groupby("pitch_type").release_speed.agg("mean")
    # Convert the cleaned DataFrame to a dictionary
    player_stats_dict = mean_speeds.to_dict()


    return JsonResponse(player_stats_dict, safe=False)
