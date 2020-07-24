```
rasa test nlu --config configs/bert-diet-heavy.yml --cross-validation --runs 1 --folds 2 --out results/bert-diet-heavy

rasa test nlu --config configs/bert-diet-origin.yml --cross-validation --runs 1 --folds 2 --out results/bert-diet-origin

rasa test nlu --config configs/bert-diet-light.yml --cross-validation --runs 1 --folds 2 --out results/bert-diet-light

rasa test nlu --config configs/jieba-diet-heavy.yml --cross-validation --runs 1 --folds 2 --out results/jieba-diet-heavy

rasa test nlu --config configs/jieba-diet-origin.yml --cross-validation --runs 1 --folds 2 --out results/jieba-diet-origin

rasa test nlu --config configs/jieba-diet-light.yml --cross-validation --runs 1 --folds 2 --out results/jieba-diet-light
```

```
streamlit run viewresults.py
```
