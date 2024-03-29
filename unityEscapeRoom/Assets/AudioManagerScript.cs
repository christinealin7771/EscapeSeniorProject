using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManagerScript : MonoBehaviour
{
    public bool pauseMusic = false;
    [SerializeField] AudioSource MusicSource;
    [SerializeField] AudioSource SFXSource;
    // Start is called before the first frame update
    public AudioClip background;
    public AudioClip clickSound;

    public GameObject MuteObject;
    public GameObject MusicObject;

    void Start()
    {
        MusicObject.SetActive(false);
        DontDestroyOnLoad(gameObject);
        MusicSource.clip = background;
        MusicSource.Play();
    }

    // Update is called once per frame
    void Update()
    {
        if (pauseMusic == true) {
            MusicSource.Pause();
        }

        // if (pauseMusic == false){
        //     MusicSource.Play();
        // }
        // else {
        //     MusicSource.Play();
        // }
        // else if (pauseMusic == false){
        //     MusicSource.Play();
        // }
    }

    public void PauseMusic (){
        pauseMusic = !pauseMusic;

        MuteObject.SetActive(!pauseMusic);
        MusicObject.SetActive(pauseMusic);
        
        if (!pauseMusic){
            MusicSource.Play();
        }
    }

}
