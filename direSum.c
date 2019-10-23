#include<stdio.h>

void diceSum(int dices, int choosen, int k)
{
	if(dices == 0){
    	if (k == sum){
    		*x = *x + 1;
			printf("%d, x => %d \n", choosen, *x);
    	}
		return 0;
	}
	for(int i = 1;i<=6;i++){
		// choose
		choosen = choosen * 10 + i;
		sum += i;
		dices--;
		// explore
		diceRool(dices, choosen, x);
		// unchoose
		choosen /= 10;
		sum -= i;
		dices++;
	}
}

int main()
{
	diceSum(x,ch,&c);
	//printf("%d\n",x);
	return (0);
}
