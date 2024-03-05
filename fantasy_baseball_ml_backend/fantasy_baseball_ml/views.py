# views.py in your Django app
from django.http import JsonResponse
from .pitching_stats import calculate_pitching_stats
from .hitting_stats import calculate_hitting_stats

def player_stats(request):
    player_name = request.GET.get('player_name')
    stat_type = request.GET.get('stat_type')
    first_name, last_name = player_name.split(' ')
    is_pitching, stats_type = stat_type.split(':')
    # stats_array = ['pitch_type', 'spin_rate', 'batting_average']
    # if stats_type not in stats_array:
    #     stats_dict = {"error": "Invalid stats type specified."}
    if is_pitching == 'pitching':
        stats_dict = calculate_pitching_stats(first_name, last_name, stats_type)
    else:
        stats_dict = calculate_hitting_stats(first_name, last_name, stats_type)


    return JsonResponse(stats_dict, safe=False)
